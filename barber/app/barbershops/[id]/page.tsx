import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarberShopDetailsPageProps {
    params : {
        id?: string;
    };
}


const BarbershopDetailsPage = async ({params} : BarberShopDetailsPageProps) => {
    const session = await getServerSession(authOptions);

    if (!params.id) {
        return null
    }

    const barbershop = await db.barbershop.findUnique ({
        where: {
            id: params.id,
        },
        include:{
            services:true,
        }
    })

    if (!barbershop) {
        return null
    }

    return ( 
       <div>
           <BarbershopInfo barbershop={barbershop} />

           <div className="px-5 flex flex-col gap-3 py-6">
               {barbershop.services.map(service => (
                <ServiceItem key={service.id} service={service} isAuthenticated={!!session?.user} barbershop={{
                       id: "",
                       name: "",
                       address: "",
                       imageUrl: ""
                   }} />
               ))}
           </div>

       </div>
       

     );
}
 
export default BarbershopDetailsPage;