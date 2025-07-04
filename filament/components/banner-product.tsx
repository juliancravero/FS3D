import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return(
        <>
            <div className="mt-4 text-center">
                <p> Colores unicos </p>
                <h4 className="mt-2 text-5xl font-extrabold upperce"> Filamento Premium </h4>
                <p className="my-2 text-lg"> High Speed </p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/bannerP.png')] bg-center mt-5"/>
        </>
    )
};

export default BannerProduct;