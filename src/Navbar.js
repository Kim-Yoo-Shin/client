const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="/">홈</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#!">인기글 <span class="sr-only"></span></a>
                <a class="nav-item nav-link active" href="#!">전체</a>
                <a class="nav-item nav-link active" href="#!">유머</a>
                <a class="nav-item nav-link active" href="#!">스포츠</a>
                <a class="nav-item nav-link active" href="#!">게임</a>
                <a class="nav-item nav-link active" href="#!">음식</a>

            </div>
            </div>
        </nav>
    )
};

export default Navbar;
