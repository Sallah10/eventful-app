<template>
    <section class="section  md:items-center">
        <div class="w-[626px]">
            <h1 class="textH1 self-start">Create an account,</h1>
        </div>
        <h2 class="textH2 md:max-w-[626px]">
            Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I store awesome moments you will like to have in coming years.
        </h2>
        <form action="" class="form">
            <div class="gap-2 flex flex-col md:w-[626px]">
                <h3 class="textH3">Fullname</h3>
                <input 
                type="text"  
                class="rounded-2xl w-full border-[#707070] border-2 px-6 py-4"/>
            </div>
            <div class="gap-2 flex flex-col md:w-[626px]">
                <h3 class="textH3">Email</h3>
                <input 
                type="email"  
                class="rounded-2xl w-full border-[#707070] border-2 px-6 py-4"/>
            </div>
            <div class="gap-2 flex flex-col md:w-[626px]">
                <h3 class="textH3">Password</h3>
                <input 
                type="password"
                class="rounded-2xl w-full border-[#707070] border-2 px-6 py-4"
                />
            </div>
            <button class="button">Create</button>
        </form>
    </section>
</template>