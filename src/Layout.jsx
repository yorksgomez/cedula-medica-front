import Header from "./Header";

function Layout({children}) {
    return (
        <main>
            <Header></Header>
            <section className="content">
                {children}
            </section>
        </main>
    );
}

export default Layout;