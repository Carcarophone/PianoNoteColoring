import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function IndexPage() {
    return <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        Hello!
// 1. Create a new image element
const pngImage = document.createElement("img");

// 2. Set the source (src) of the image
pngImage.src = "QduC-SoireeHorizon-266modifie.jpg"; // Replace with your image's path or URL
pngImage.alt = "Description of the image"; // Good for accessibility

// 3. Find the container element in the DOM
const container = document.getElementById("imageContainer");

// 4. Append the image to the container
container.appendChild(pngImage);
    </main>
}
