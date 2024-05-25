import { Helmet } from "react-helmet";
import MainLayout from "./components/layouts/MainLayout";

function App() {
    return (
        <MainLayout>
            <Helmet>
                <title>فروشگاه استیکر برنامه نویسی</title>
            </Helmet>

            <div className="mx-auto max-w-6xl">
                {/* StoreHeader */}
                {/* ProductList */}
            </div>
        </MainLayout>
    );
}

export default App;
