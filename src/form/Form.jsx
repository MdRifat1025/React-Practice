import React from 'react';
import { useFormik } from 'formik';


export default function Form() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');

    // const handleChangeName = (e) => {
    //     setName(e.target.value);
    // }
    // const handleChangeEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    // const handleChangePass = (e) => {
    //     setPass(e.target.value);
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const data = {
    //         name: name,
    //         email: email,
    //         pass: pass
    //     }
    //     console.log(data);
    // }


    return (
        <div style={{
            textAlign: 'center', marginTop: '50px', border: '1px solid black', width: '300px',
            padding: '20px', marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}>
            <h1 style={{ color: 'blue', margin: '20px' }}> User sign up form</h1>

            <form onSubmit={formik.handleSubmit}>

                <label style={{ color: 'blue', margin: '10px' }}>Username:</label>

                <input onChange={formik.handleChange} style={{ margin: '10px' }} type="text" value={formik.values.name} name="name" /><br />

                <label style={{ color: 'blue', margin: '10px' }}>Email:</label>

                <input onChange={formik.handleChange} style={{ margin: '10px' }} type="text" value={formik.values.email} name="email" /><br />

                <label style={{ color: 'blue', margin: '10px' }}>Passwprd</label>

                <input onChange={formik.handleChange} style={{ margin: '10px' }} type="text" value={formik.values.pass} name="pass" /><br />

                <button style={{ backgroundColor: "green", color: 'white' }} type="submit">
                    Submit
                </button>


            </form>
        </div>
    )
}
