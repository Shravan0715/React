import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await registerUser({ username: data.username, email: data.email, password: data.password });
            alert('Registration successful! Please login.');
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
            alert('User already exists or an error occurred.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign Up</h2>
            <input {...register('username')} placeholder="Username" />
            <p>{errors.username?.message}</p>

            <input {...register('email')} placeholder="Email" />
            <p>{errors.email?.message}</p>

            <input type="password" {...register('password')} placeholder="Password" />
            <p>{errors.password?.message}</p>

            <input type="password" {...register('confirmPassword')} placeholder="Confirm Password" />
            <p>{errors.confirmPassword?.message}</p>

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
