import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState, useContext, useEffect } from "react";
import { TokenContext } from "../App";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
   
export function SignIn() {
    const [credentials, setCredentials] = useState({
        "username": "",
        "password": ""
    })
    
    const { token, setToken } = useContext(TokenContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (token)
            navigate('/')
    }, [token])

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await authService.signIn(credentials);
            console.log(response);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token)
                setToken(response.data.token)
            }
        }
        catch (e) {
            console.log('ERROR', e)
        }
    }

    return (
        <div className="flex justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" className="text-[#b21c0e] text-center">
                    Đăng nhập
                </Typography>
                <form onSubmit={handleSubmit} className="mt-6 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                    <Input
                        variant="outlined"
                        label="Tên đăng nhập"
                        size="lg"
                        name="username"
                        onChange={handleChange}
                        value={credentials.username}
                    />
                    <Input
                        variant="outlined"
                        label="Mật khẩu"
                        type="password"
                        size="lg"
                        name="password"
                        onChange={handleChange}
                        value={credentials.password}
                    />
                    </div>
                    <Button type="submit" className="mt-6 bg-[#b21c0e]" fullWidth>
                    đăng nhập
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                    Chưa có tài khoản?{" "}
                    <a href="#" className="hover:underline font-medium text-[#b21c0e]">
                        Đăng ký
                    </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}