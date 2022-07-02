<template>
  <section>
    <div class="container mx-auto">
      <header class="text-center py-4 space-y-4">
        <h2 class="text-2xl font-bold">The MetaStock PowerTools: Power to the People</h2>
        <p class="text-xl">The PowerTools include the Explorer, the System Tester, the Expert Adviser and the
          FORECASTER. They come
          standard in all versions of MetaStock, and are designed to help traders of all levels.</p>
      </header>
      <div class="powertools  grid gap-4 md:grid-cols-2 px-4">
        <div class="powertool explorer flex flex-col">
          <img
            src="https://www.metastock.com/images/i/TRADER-EOD.png"
            alt=""
          >
          <h3>"Where do I start in a universe of instruments?"
          </h3>
          <p>There are thousands of instruments out there. Moreover there are hundreds of systems you might want to use
            to trade them. How do you even begin to sort through the possibilities? How do you find the winners? Enter
            the MetaStock Explorer. The Explorer lets you use YOUR criteria to scan the markets and find the instruments
            that fit YOUR strategy.</p>
          <div class="video bg-blue-500 text-white text-center max-w-[90%]  rounded-md shadow-md px-8 py-4 ">
            <a
              href="/video-powertools-explorer"
              target="_blank"
              class="small button expand"
            >Watch the Explorer
              Video</a>
          </div>
        </div>
        <div class="powertool advisor flex flex-col">
          <img
            src="https://www.metastock.com/images/i/TRADER-REALTIME.PNG"
            alt=""
          >
          <h3>"How do I interpret the indicators on my chart?"</h3>
          <p>Imagine having the input of industry professionals when and where you need it. That's what the MetaStock
            Expert Advisor is all about. You can display the industry's most popular indicators with correlating buy and
            sell signals. Expert commentary gives you specific information about the indicators and what triggered the
            signal. It's a great educational tool.</p>
          <div class="video ">
            <a
              href="/video-powertools-expertadvisor"
              target="_blank"
              class="small button expand"
            >Watch the Expert
              Advisor Video</a>
          </div>
        </div>
        <div class="powertool tester flex flex-col">
          <img
            src="https://www.metastock.com/images/i/TRADER-FUNDAMENTAL.png"
            alt=""
          >
          <h3>"How can I test and optimize my strategies?"</h3>
          <p>Do you want to create, back-test, compare, and optimize your strategies BEFORE you risk money in the
            market. With the MetaStock System Tester you can. You can even test multiple instruments against multiple
            systems. By analyzing every trade that would have occurred historically, you build confidence in your
            system... something all traders need.</p>
          <div class="video ">
            <a
              href="/video-powertools-systemtester"
              target="_blank"
              class="small button expand"
            >Watch the System
              Tester Video</a>
          </div>
        </div>
        <div class="powertool forecaster flex flex-col">
          <img
            src="https://www.metastock.com/images/i/TRADER-FORECASTER.png"
            alt=""
          >
          <h3>"How do I know where prices will go next?"</h3>
          <p>You’ve analyzed the market and identified your trading opportunities, but where are prices likely to go?...
            and how long will it take to get there? What trading opportunities are there with this trade? The MetaStock
            FORECASTER uses patent-pending technology to help you see a more clear picture of tomorrow and set more
            precise stops and profit targets.</p>
          <div class="video ">
            <a
              href="/Video-Forecaster"
              target="_blank"
              class="small button expand"
            >Watch the FORECASTER
              Video</a>
          </div>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'MetaStock PowerTools',
    meta: [
      {
        name: 'description',
        content: 'MetaStock gives you these powerful tools to help your trades'
      }
    ],

  }
}
</script>

<style scoped>
.powertool {
  @apply space-y-4 max-w-sm mx-auto;
}

.powertool h3 {
  @apply text-center font-bold;
}

.powertool img {
  @apply w-full max-w-[300px] self-center;
}

.powertool p {
  @apply text-base leading-6;
}
</style>