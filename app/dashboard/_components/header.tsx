import Image from "next/image"

export default function Header(){
    return(
        <div className="w-screen h-[10vh] bg-red-600 flex flex-row items-center px-10">
            <Image src="/logo-removebg-preview.png"
                    width={100}
                    height={0}
                    alt="Logo"
                    className="mt-6"
                    draggable={false}
            ></Image>
        </div>
    )
}