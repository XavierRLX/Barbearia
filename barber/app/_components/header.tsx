"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react"
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";


const Header = () => {

    const {data, status} = useSession();
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
                    <SheetContent className="p-0">
                        <SheetHeader>

                            {data?.user? (
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={data.user?.image ?? "" }/>
                                    </Avatar>

                                    <h2 className="font-bold">{data.user.name}</h2>
                                </div>
                            ) : (
                                <></>
                            )} 

                            <SheetTitle className="text-left border-b border-solid border-primary p-5">Menu</SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
}
 
export default Header ;