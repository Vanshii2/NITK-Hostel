import React, { useState, useEffect } from 'react';
import styles from '../../styles/admin/People.module.css';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { toast } from 'react-hot-toast';

const initialForm = {
    _id: null,
    name: '',
    image: '',
    alt: '',
    designation: '',
    role: 'supervisor',
    phone: '',
    email: '',
    contact: '',
};

const PeopleForm = ({ selectedPerson, setIsFormOpen, updatePeople }) => {
    const [form, setForm] = useState(initialForm);
    const axiosPrivate = useAxiosPrivate();
    
    // add remove image button to remove image
    const removeImage = () => {
        setForm(f => ({ ...f, image: '' }));
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setForm(f => ({ ...f, image: reader.result }));
                };
                reader.readAsDataURL(file);
            }
        } else {
            setForm(f => ({ ...f, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.promise(
            async () => {
                const response = await axiosPrivate.post('/api/people', form);
                return response;
            },
            {
                loading: 'Processing...',
                success: (response) => {
                    updatePeople(response?.data?.person);
                    setIsFormOpen(false);
                    console.log("RESPONSE: ", response);
                    return response?.data?.message || 'Person added successfully!';
                },
                error: (error) => {
                    console.log("ERROR: ", error);
                    return error?.response?.data?.message || 'Error adding person!';
                }
            }
        );
    };

    useEffect(() => {
        if (selectedPerson) {
            setForm((prev) => ({
                ...prev,
                ...selectedPerson,
            }));
        }
    }, [selectedPerson]);

    return (
        <form className={styles.addForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Name*</label>
                <input
                    className={styles.input}
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name*"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="image">Image</label>
                <input
                    className={styles.input}
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                />
            </div>
            {form.image && (
                <div className={styles.formGroup}>
                    <span className={styles.label}></span>
                    <img src={form.image} alt="Preview" style={{ maxHeight: 60, borderRadius: 6, marginLeft: 8 }} />
                    <button className={styles.removeBtn} onClick={removeImage}>X</button>
                </div>
            )}
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="alt">Alt text</label>
                <input
                    className={styles.input}
                    id="alt"
                    name="alt"
                    value={form.alt}
                    onChange={handleChange}
                    placeholder="Alt text"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="designation">Designation*</label>
                <input
                    className={styles.input}
                    id="designation"
                    name="designation"
                    value={form.designation}
                    onChange={handleChange}
                    placeholder="Designation*"
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="role">Role*</label>
                <select
                    className={styles.input}
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                >
                    <option value="supervisor">Supervisor</option>
                    <option value="warden">Warden</option>
                    <option value="staff">Staff</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">Phone</label>
                <input
                    className={styles.input}
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                    className={styles.input}
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="contact">Contact</label>
                <input
                    className={styles.input}
                    id="contact"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="Contact"
                />
            </div>
            {/* cancel button to close form */}
            <button className={styles.cancelBtn} onClick={() => setIsFormOpen(false)}>Cancel</button>
            <button className={styles.addBtn} type="submit">{selectedPerson ? 'Update' : 'Add'} Person</button>
        </form>
    );
};

export default PeopleForm; 