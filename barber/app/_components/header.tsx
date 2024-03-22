"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react"
import { MenuIcon } from "lucide-react";


const Header = () => {
    return (
        <Card >
            <CardContent className="py-5 px-30 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="FSWBarber" height={22} width={120}/>
                <Button variant={"outline"} size={"icon"} className="h-8 w-8">
                    <MenuIcon size={16}/>
                </Button>
            </CardContent>
        </Card>
    );
}
 
export default Header ;