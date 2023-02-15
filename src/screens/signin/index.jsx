import React, { useState, useReducer, useEffect } from 'react';
import {
	Text,
	Input,
	Button,
	Stack,
	InputGroup,
	InputLeftElement,
	Flex,
	Link,
} from '@chakra-ui/react';
import { useLocation } from 'wouter';
import { WithContainer } from '../../HOC';
import { HiUser, HiLockClosed } from 'react-icons/hi';
import axios from 'axios';
import { routes } from '../../router/routes';
import config from '../../../config';

const token = localStorage.getItem('auth_token');
const { dashboard } = routes;

function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [location, setLocation] = useLocation();

	const [formData, setformData] = useReducer(
		(prev, next) => {
			return { ...prev, ...next };
		},
		{ user_name: '', password: '' },
	);

	useEffect(() => {
		if (token) {
			setLocation(dashboard);
		}
	}, [token]);

	const onVerify = () => {
		axios({
			method: 'post',
			url: `${config.api_url}auth/login`,
			data: formData,
		})
			.then((response) => {
				const {
					data: {
						response: { token },
					},
				} = response;

				setLocation(dashboard);
				localStorage.setItem('auth_token', token);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Flex direction={'column'} justify={'center'} h='100%'>
			<Text fontSize={'2xl'} mb={10} align='center'>
				Log in
			</Text>

			<Stack spacing={4}>
				<InputGroup>
					<InputLeftElement
						pointerEvents='none'
						children={<HiUser color='gray' />}
					/>
					<Input
						placeholder='Username'
						value={formData.user_name}
						onChange={(e) => setformData({ user_name: e.target.value })}
					/>
				</InputGroup>

				<InputGroup>
					<InputLeftElement
						pointerEvents='none'
						children={<HiLockClosed color='gray' />}
					/>
					<Input
						placeholder='Password'
						type={showPassword ? 'text' : 'password'}
						value={formData.password}
						onChange={(e) => setformData({ password: e.target.value })}
					/>
				</InputGroup>
			</Stack>

			<Text fontSize={'sm'} align={'right'} mt={4}>
				Forgot password?
			</Text>

			<Button colorScheme={'linkedin'} mt={12} onClick={onVerify}>
				Log in
			</Button>

			<Text fontSize={'sm'} align={'center'} mt={10}>
				<Link href='/signup'>New user?</Link>
			</Text>
		</Flex>
	);
}

export default WithContainer(Login);
