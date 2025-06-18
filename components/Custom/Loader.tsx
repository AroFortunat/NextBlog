import { Spinner } from "../ui/spinner"
import { PageContainer } from "./PageContainer"

export const Loader = () => {
    return (
        <PageContainer>
            <div className="flex justify-center h-full my-80">
                <Spinner size={'large'}>Loading...</Spinner>
            </div>
        </PageContainer>)
}

