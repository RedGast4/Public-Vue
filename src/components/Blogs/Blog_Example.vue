<template>
    <div class="Blog">
        <div class="ContainerBlog">
            <img class="BannerBlog" src="../../assets/images/background-elf.jpg" alt="img">
            <div class="WrapperBlog">
                <h1 class="TitleBlog">
                    Title
                </h1>
                
                <h2 class="SubTitleBlog">
                    Subtitle
                </h2>
            </div>
            <div class="WrapperBlog">
                <p class="TextBlog">
                blavblablablavblablablavblablablavblablablavblablablav
                blablablavblablablavblablablavblablablavblablablavblab
                lablavblablablavblablablavblablablavblablablavblablabl
                avblablablavblablablavblablablavblablablavblablablavbl
                ablablavblablablavblabla
                </p>
            </div>
        </div>
    </div>
</template>
<style>
    .ContainerBlog{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 2px solid rgba(255, 231, 17, .5);
        border-radius: 20px;
        backdrop-filter: blur(20px);
        box-shadow: 0 0 30px rgba(0, 0, 0, .5);
        background: #313112a9;
        overflow: hidden;
        width: 800px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: auto;
        height: 500px;
    }
    .WrapperBlog{
        padding-left: 40px;
        padding-right: 100px;
    }
    .TitleBlog{
        color: #dbd820;
    }
    .SubTitleBlog{
        padding-bottom: 200px;
        padding-right: 400px;
        color: #dbd820;
    }
    .TextBlog{
        padding-bottom: 100px;
        color: #dbd820;
    }
    .BannerBlog{
        position: absolute;
        top: 0px;
        right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom-left-radius: 20px;
        height: 250px;
        width: auto;
    }
</style>