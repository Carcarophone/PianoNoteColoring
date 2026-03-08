import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function IndexPage() {
    return <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        Hello!
        // Create a new image element 
        var img = document.createElement("img"); 
         
        // Set the source of the image 
        img.src = "main/QduC-SoireeHorizon-266modifie.jpg"; 
         
        // Add the image to the document 
        document.body.appendChild(img); 
    </main>
}
