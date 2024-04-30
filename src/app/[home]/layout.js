import Navbar from "@/components/Navbar";


export const metadata = {
    title: "Vutuk | MEDIA",
    description: "Generated by create next app",
};

export default function WebsiteLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}

        </>
    );
}
