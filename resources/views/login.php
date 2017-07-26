<!doctype html>
<html lang="en">
<head>
<body>
    <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
        <link rel="stylesheet" href="assets/css/login.css">
        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
        <script>
            function submit(){
                document.querySelector("#login").submit();
            }
        </script>
    </header>

    <main>

        <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
            <main class="mdl-layout__content">
                <div class="mdl-card mdl-shadow--6dp">
                    <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 class="mdl-card__title-text">Torneyo</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <form action="/oauth/token" id="login" method="post">

                            <input type="hidden" name="client_secret" value="bEoyH3MtiBgpLRRgl08wHo2sKra6Me3RuR4IJya0" />
                            <input type="hidden" name="grant_type" value="password" />
                            <input type="hidden" name="client_id" value="2" />

                            <div class="mdl-textfield mdl-js-textfield">
                                <input class="mdl-textfield__input" type="text" id="username" name="username"/>
                                <label class="mdl-textfield__label" for="username">Username</label>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield">
                                <input class="mdl-textfield__input" type="password" id="userpass" name="password" />
                                <label class="mdl-textfield__label" for="userpass">Password</label>
                            </div>
                        </form>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <button onclick="submit()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="submit">Entrar</button>
                    </div>
                </div>
            </main>
        </div>


    </main>
</div>

<script type="text/javascript" src="bundle-login.js"></script>
</body>
</html>
