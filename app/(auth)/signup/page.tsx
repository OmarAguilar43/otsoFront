import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function SignUpPage(){
    return( 
       <div className="bg-white px-10 py-2 rounded-md">
        <p className="text-2xl my-4">Registrate </p>
        <div className="flex flex-col gap-2 my-4 items-center">
            <Input label="Email" type="Email" isRequired={true} size="sm"></Input>
            <Input label="Password" type="password" isRequired={true} size="sm"></Input>
        </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary">Registarse</Button>
                <p className="mt-2">Ya tines una cuenta? <Link href="/login" className="hover:text-blue-800 underline"> Inisia Sesion</Link></p>
            </div>
       
       </div>
    )
}