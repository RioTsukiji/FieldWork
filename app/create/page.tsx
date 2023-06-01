import Map from "@/features/create/components/Map";
import List from "@/features/create/components/List";
import Header from "@/components/Header";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Header title={"ルート作成"}/>
            <div className="flex flex-row h-screen ">
                <List/>
                <Map/>
            </div>
        </main>
    )
}
