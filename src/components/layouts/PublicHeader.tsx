import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SearchBox from "../post/SearchBox"

export default function PublicHeader() {
    return (
        <div>
            <header className="border-b bg-blue-200">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="font-bold text-xl"
                                    render={<Link href="/" />}>
                                    Blog
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center gap-4">
                        <SearchBox />
                        <Button variant="outline" nativeButton={false} render={<Link href="/login" />}>
                            ログイン
                        </Button>
                        <Button nativeButton={false} render={<Link href="/register" />}>
                            新規登録
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    )
}
