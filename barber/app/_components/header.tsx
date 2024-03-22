"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react"
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";


const Header = () => {
    return (
        <Card >
            <CardContent className="py-5 px-30 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="FSWBarber" height={22} width={120}/>
                <Sheet>
                    <SheetTrigger>
                        <Button variant={"outline"} size={"icon"} className="h-8 w-8">
                            <MenuIcon size={16}/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
}
 
export default Header ;