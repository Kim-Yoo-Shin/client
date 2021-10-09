const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="/">홈</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#!">인기글 <span className="sr-only"></span></a>
                <a className="nav-item nav-link active" href="#!">전체</a>
                <a className="nav-item nav-link active" href="#!">유머</a>
                <a className="nav-item nav-link active" href="#!">스포츠</a>
                <a className="nav-item nav-link active" href="#!">게임</a>
                <a className="nav-item nav-link active" href="#!">음식</a>

            </div>
            </div>
        </nav>
    )
};

export default Navbar;
