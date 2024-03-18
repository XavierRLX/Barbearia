
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client" ;
import Image from "next/image";

interface ServiceItemProps {
    service:Service
}


const ServiceItem = ({service} : ServiceItemProps) => {
    return ( 

        <Card className="m-2">
            <CardContent className="p-3">
                <div className="flex">
                    <div className="relative h-[110px] w-[110px]">
                        <Image className="rounded-lg" src={service.imageUrl} fill alt={service.name} style={{objectFit: "contain"}}  />
                    </div>
                </div>
            </CardContent>
        </Card>

         );
}
 
export default ServiceItem;