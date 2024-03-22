"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react"
import { Account, User } from "@prisma/client";

// interface HeaderProps {
//     user : User
// }


const Header = (
    //{user} : HeaderProps
    ) => {

    const {data} = useSession();
    const handleLoginClick = async () => {
        await signIn();
    };
    return (
        <Card >
            <CardContent className="py-5 px-30 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="FSWBarber" height={22} width={120}/>
                {/* <Button variant={"outline"} size={"icon"} className="h-8 w-8">
                    <MenuIcon/>
                </Button> */}
                {data?.user ? (
                    <h1>{data.user.name}</h1>
                ) : (
                <Button onClick={handleLoginClick}>Login</Button>
                )}
            </CardContent>
        </Card>
    );
}
 
export default Header ;