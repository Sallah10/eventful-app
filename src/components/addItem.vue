<template>
   <section class="section md:items-center">
        <form action="" class="form md:w-[626px]">
            <div class="gap-2 flex flex-col">
                <h3 class="textH3">Date in the future</h3>
                <input 
                type="date"
                class="rounded-2xl w-full border-[#707070] border-2 px-6 py-4"
                />
            </div>
            <div class="gap-2 flex flex-col">
                <h3 class="textH3">Title</h3>
                <input 
                type="text"  
                class="rounded-2xl w-full border-[#707070] border-2 px-6 py-4"/>
            </div>
            <div class="gap-2 flex flex-col">
                <h3 class="textH3">Details</h3>
                <textarea 
                class="rounded-2xl w-full h-[459px] border-[#707070] border-2 px-6 py-4"
                ></textarea>
            </div>
            <button class="button">Save</button>
        </form>
   </section>
</template>