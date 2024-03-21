"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { singIn } from "next-auth/react"

const Header = () => {
    const handleLoginClick = async () => {
        await singIn();
    };
    return (
        <Card >
            <CardContent className="py-5 px-30 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="FSWBarber" height={22} width={120}/>
                {/* <Button variant={"outline"} size={"icon"} className="h-8 w-8">
                    <MenuIcon/>
                </Button> */}
                <Button onClick={handleLoginClick}>Login</Button>
            </CardContent>
        </Card>
    );
}
 
export default Header ;