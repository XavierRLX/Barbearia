"use client"
import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/app/_components/ui/sheet";
import { Service } from "@prisma/client" ;
import { ptBR } from "date-fns/locale";
import { signIn } from "next-auth/react";
import { Underdog } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface ServiceItemProps {
    service:Service
    isAuthenticated?:boolean;
}


const ServiceItem = ({service, isAuthenticated} : ServiceItemProps) => {

    const [date, setDate] = React.useState<Date | undefined> (new Date())

    const handleBookingClick = () => {
        if (!isAuthenticated)
        signIn("google");
    }
    return ( 

        <Card className="m-2">
            <CardContent className="p-3 w-full">
                <div className="flex gap-4 items-center w-full">
                    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                        <Image className="rounded-lg" src={service.imageUrl} fill alt={service.name} style={{objectFit: "contain"}}  />
                    </div>
                    <div className="flex flex-col w-full">
                        <h2 className="font-sans"> {service.name} </h2>
                        <p className="text-sm text-gray-400">{service.description}</p>

                        <div className="flex items-center justify-between mt-3">
                            <p className="text-primary font-bol">
                                {Intl.NumberFormat("PT-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(Number(service.price))}
                            </p>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button onClick={handleBookingClick} variant="secondary">Reservar</Button>
                                </SheetTrigger>
                                <SheetContent className="p-0">
                                    <SheetHeader className="text-alert px-5 py-6 border-b border-solid border-secondary">
                                        <SheetTitle>Fazer Reserva</SheetTitle>
                                    </SheetHeader>
                                    <Calendar locale={ptBR} fromDate={new(Date)} mode="single" selected={date} onSelect={setDate} className="mt-6"
                                    styles={{
                                        head_cell: {
                                            width:"100%",
                                            textTransform: "capitalize",
                                        },
                                        cell:{
                                            width:"100%",
                                        },
                                        button:{
                                            width: "100%",
                                        },
                                        nav_button_previous:{
                                            width: "32px",
                                        },
                                        nav_button_next:{
                                            width: "32px",
                                        },
                                        caption:{
                                            textTransform: "capitalize",
                                        },
                                    }}
                                    />
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

         );
}
 
export default ServiceItem;