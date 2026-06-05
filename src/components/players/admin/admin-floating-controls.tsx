import { FloatingBar, FloatingBarButton, FloatingBarDivider } from "@/components/ui/advanced/floating-bar"
import { IPlayerMeta } from "../transactions/add-transaction-form"
import { AddTransactionSheet } from "../transactions/add-transaction-sheet"
import { CreateContract } from "../contract/create-contract"
import { ArrowUpDown, NotebookPen, UserPen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IAdminFloatingBar {
    playerMeta: IPlayerMeta
}

export const AdminFloatingBar = ({ playerMeta }: IAdminFloatingBar) => {
    return (
        <FloatingBar
            position="left"
            backdrop={false}
            className="border border-border bg-[#141313] rounded-lg shadow-sm"
        >
            <CreateContract
                playerMeta={playerMeta}
                trigger={
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2.5 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground gap-1.5"
                    >
                        <NotebookPen size={11} className="text-muted-foreground" />
                        Add Contract
                    </Button>
                }
            />


            <AddTransactionSheet
                trigger={
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2.5 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground gap-1.5"
                    >
                        <ArrowUpDown size={11} className="text-muted-foreground" />
                        Add Transaction
                    </Button>
                }
                playerMeta={playerMeta}
            />


            <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2.5 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground gap-1.5"
                onClick={() => {}}
            >
                <UserPen size={11} className="text-muted-foreground" />
                Edit Bio
            </Button>
        </FloatingBar>
    )
}