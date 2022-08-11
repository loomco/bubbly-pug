import { AccountSidebar } from '.';

const AccountLayout = ({ children }) => {

    return (
        <>
            <div className="flex justify-between max-w-[1800px] mx-auto min-h-screen">
                <AccountSidebar />
                {children}
            </div>
        </>
    )
}

export default AccountLayout