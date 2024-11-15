<template>
    <div class="Footer">
        <div class="FooterMusic" @click="controlBtn">
            <audio id="Music" preload="auto">
                <source src="../assets/music/Pride and Penance.mp3" type="audio/mpeg">
            </audio>
            <div id="Player-Container">
                <div id="Play-Pause" class="Play">Play</div>
            </div>
        </div>
        <div class="FooterLang">
            <div class="Lang_Buttons">
                <button class="Button Lang" @click="locale">
                    <span class="Icon">
                        <ion-icon name="Language"></ion-icon>
                    </span> {{ $t('locale') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        locale() {
            if (this.$i18n.locale === 'ru') {
                this.$i18n.locale = 'en'
            }
            else if (this.$i18n.locale === 'en') {
                this.$i18n.locale = 'jp'
            }
            else {
                this.$i18n.locale = 'ru'
            }
        },
        controlBtn() {
            let track = document.getElementById('Music')
            let playPause = document.getElementById('Play-Pause')

            if (track.paused) {
                track.play()
                playPause.className = 'Pause'
            } else {
                track.pause()
                playPause.className = 'Play'
            }
        }
    }
}
</script>

<style>
.Footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}
.FooterLang{
    display: flex;
    justify-content: center;
    align-items: center;
}
.Lang_Buttons Button {
    position: relative;
    color: #dbd820;
    width: 100px;
    height: 40px;
    font-size: 1.1em;
    margin-left: 40px;
    text-decoration: none;
    padding: 6px 15px;
    font-weight: 500;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    transition: transform .5s ease, height .2s ease;
}

.Lang_buttons Button::after {
    content: '';
    width: 100%;
    height: 3px;
    background: #dbd820;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
    border-bottom: 2px solid #dbd820;
}

.Lang_buttons Button:hover ::after {
    transform-origin: left;
    transform: scaleX(1);
    border-bottom: 2px solid #dbd820;
}

.Lang_buttons Button:hover {
    border-bottom: 2px solid #dbd820;
}

#Player-Container #Play-Pause {
    cursor: pointer;
    text-indent: -999999px;
    height: 20px;
    width: 20px;
    padding: 12px 12px;
    z-index: 2;
    background-image: url(../assets/images/icons/play.svg);
    background-repeat: no-repeat !important;
    background-position: center;
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
}

.Play {
    background-image: url(../assets/images/icons/play.svg);
    background-color: #dbd820;
}
.Pause {
    background-image: url(../assets/images/icons/pause.svg) !important;
    background-color: #dbd820;
}
@media (max-width: 1980px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 1280px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 1024px) and (max-height: 1366px){
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 1024px) and (max-height: 600px){
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 768px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 430px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 414px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 412px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 390px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 375px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 360px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 344px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
@media (max-width: 320px) {
	.Footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 100;
	}
	.FooterLang{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Lang_Buttons Button {
		position: relative;
		color: #dbd820;
		width: 100px;
		height: 40px;
		font-size: 1.1em;
		margin-left: 40px;
		text-decoration: none;
		padding: 6px 15px;
		font-weight: 500;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform .5s ease, height .2s ease;
	}

	.Lang_buttons Button::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #dbd820;
		border-radius: 5px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform .5s;
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover ::after {
		transform-origin: left;
		transform: scaleX(1);
		border-bottom: 2px solid #dbd820;
	}

	.Lang_buttons Button:hover {
		border-bottom: 2px solid #dbd820;
	}

	#Player-Container #Play-Pause {
		cursor: pointer;
		text-indent: -999999px;
		height: 20px;
		width: 20px;
		padding: 12px 12px;
		z-index: 2;
		background-image: url(../assets/images/icons/play.svg);
		background-repeat: no-repeat !important;
		background-position: center;
		background-size: 16px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 20px;
	}

	.Play {
		background-image: url(../assets/images/icons/play.svg);
		background-color: #dbd820;
	}
	.Pause {
		background-image: url(../assets/images/icons/pause.svg) !important;
		background-color: #dbd820;
	}
}
</style>