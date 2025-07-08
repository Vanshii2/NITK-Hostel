import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const USER_REGEX = /^[A-z][A-z0-9_]{3,13}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const adminLogin = async (req, res) => {
	const { username, password } = req.body;
	try {
		let foundAdmin = await Admin.findOne({username: username}, {_id:1, username:1, password:1}).exec();
		if (!foundAdmin) {
			return res.status(401).json({ message: `Username doesn't exist!` });
		}
		const passwordMatch = await bcrypt.compare(password, foundAdmin.password);
		if (passwordMatch) {
			const accessToken = jwt.sign(
                { 	
                    'id': foundAdmin._id.toString(),
					'username': foundAdmin.username 
				},
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: '10m' }
			);
			const refreshToken = jwt.sign(
                { 'id': foundAdmin._id },
				process.env.REFRESH_TOKEN_SECRET,
				{ expiresIn: '10h' }
			);
			foundAdmin.refreshToken = refreshToken;
			await foundAdmin.save(); //24 * 60 * 60 * 1000
			res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 10 * 60 * 60 * 1000, secure: true, sameSite: 'None' });
			res.json({username: foundAdmin.username, accessToken});
		}
		else {
            res.status(400).json({ message: 'Password is wrong!' })
		}

	} catch(error) {
		res.status(404).json({ message: error.message });
	}
}

const adminRegister = async (req, res) => {
	const { username, password } = req.body;

	if (!USER_REGEX.test(username)) {
		return res.status(400).json({ message: 'Username not valid!' });
	}
	if (!PWD_REGEX.test(password)) {
		return res.status(400).json({ message: 'Password not valid!' });
	}
	const usernameTaken = await Admin.findOne({ username }, { username }).exec();
	if (usernameTaken) {
		return res.status(409).json({ message: 'Username already exist!' });
	}
	try {
		const hashedPwd = await bcrypt.hash(password, 10);
		const newAdmin = new Admin({ username: username, password: hashedPwd });
		newAdmin.save();

		res.sendStatus(200);
	} catch(error) {
		res.status(404).json({ message: error.message });
	}
}

const adminRefresh = async (req, res) => {
	const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundAdmin = await Admin.findOne({ refreshToken }, {_id:1, username:1, avatar:1}).exec();
    if (!foundAdmin) return res.sendStatus(403);
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
			const userId = foundAdmin._id.toString();
			if (err || userId !== decoded.id) return res.sendStatus(403);
			const accessToken = jwt.sign(
				{ 
					'id': userId,
					'username': foundAdmin.username
				},
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: '10s' }
			);
            res.json({ username:foundAdmin.username, accessToken });
        }
    );
}

const adminLogout = async (req, res) => {
    // ...existing code...
};

export default {
    adminLogin,
    adminRegister,
    adminRefresh,
    adminLogout
};