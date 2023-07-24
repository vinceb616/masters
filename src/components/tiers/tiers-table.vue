<template>
  <div class="flex justify-center">
    <form
      action="mailto:vincentbolhuis@gmail.com?subject=open_championship_team"
      method="post"
      enctype="text/plain"
      class="w-full max-w-[450px]"
    >
      <div class="flex flex-col space-y-4">
        <h2 class="text-2xl">Create your team</h2>
        <div class="flex flex-col space-y-2">
          <label for="team">Enter your name</label>
          <input
            type="text"
            name="team"
            class="appearance-none bg-white py-2 px-3 rounded"
            required
          />
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 1 Player</label>
          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier1"
              required
            >
              <option></option>
              <option value="Scottie Scheffler">Scottie Scheffler</option>
              <option value="Rory McIlroy">Rory McIlroy</option>
              <option value="Jon Rahm">Jon Rahm</option>
              <option value="Cameron Smith">Cameron Smith</option>
              <option value="Viktor Hovland">Viktor Hovland</option>
              <option value="Brooks Koepka">Brooks Koepka</option>
              <option value="Xander Schauffele">Xander Schauffele</option>
              <option value="Tyrrell Hatton">Tyrrell Hatton</option>
              <option value="Tommy Fleetwood">Tommy Fleetwood</option>
              <option value="Patrick Cantlay">Patrick Cantlay</option>
              <option value="Rickie Fowler">Rickie Fowler</option>
              <option value="Collin Morikawa">Collin Morikawa</option>
              <option value="Shane Lowry">Shane Lowry</option>
              <option value="Matthew Fitzpatrick">Matthew Fitzpatrick</option>
              <option value="Jordan Spieth">Jordan Spieth</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 2 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier2"
              required
            >
              <option></option>
              <option value="Dustin Johnson">Dustin Johnson</option>
              <option value="Joohyung Kim">Joohyung Kim</option>
              <option value="Wyndham Clark">Wyndham Clark</option>
              <option value="Tony Finau">Tony Finau</option>
              <option value="Max Homa">Max Homa</option>
              <option value="Cameron Young">Cameron Young</option>
              <option value="Justin Rose">Justin Rose</option>
              <option value="Sam Burns">Sam Burns</option>
              <option value="Minwoo Lee">Minwoo Lee</option>
              <option value="Robert MacIntyre">Robert MacIntyre</option>
              <option value="Justin Thomas">Justin Thomas</option>
              <option value="Bryson DeChambeau">Bryson DeChambeau</option>
              <option value="Talor Gooch">Talor Gooch</option>
              <option value="Patrick Reed">Patrick Reed</option>
              <option value="Hideki Matsuyama">Hideki Matsuyama</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 3 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier3"
              required
            >
              <option></option>
              <option value="Corey Conners">Corey Conners</option>
              <option value="Adam Scott">Adam Scott</option>
              <option value="Sungjae Im">Sungjae Im</option>
              <option value="Ryan Fox">Ryan Fox</option>
              <option value="Russell Henley">Russell Henley</option>
              <option value="Jason Day">Jason Day</option>
              <option value="Keegan Bradley">Keegan Bradley</option>
              <option value="Brian Harman">Brian Harman</option>
              <option value="Denny McCarthy">Denny McCarthy</option>
              <option value="Si Woo Kim">Si Woo Kim</option>
              <option value="Louis Oosthuizen">Louis Oosthuizen</option>
              <option value="Padraig Harrington">Padraig Harrington</option>
              <option value="Joaquin Niemann">Joaquin Niemann</option>
              <option value="Byeong Hun An">Byeong Hun An</option>
              <option value="Sahith Theegala">Sahith Theegala</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 4 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier4"
              required
            >
              <option></option>
              <option value="Nicolai Hojgaard">Nicolai Hojgaard</option>
              <option value="Harris English">Harris English</option>
              <option value="Branden Grace">Branden Grace</option>
              <option value="Sepp Straka">Sepp Straka</option>
              <option value="Lucas Herbert">Lucas Herbert</option>
              <option value="Kurt Kitayama">Kurt Kitayama</option>
              <option value="J.T. Poston">J.T. Poston</option>
              <option value="Gary Woodland">Gary Woodland</option>
              <option value="Adrian Meronk">Adrian Meronk</option>
              <option value="Thomas Pieters">Thomas Pieters</option>
              <option value="Thomas Detry">Thomas Detry</option>
              <option value="Seamus Power">Seamus Power</option>
              <option value="Emiliano Grillo">Emiliano Grillo</option>
              <option value="Chris Kirk">Chris Kirk</option>
              <option value="Phil Mickelson">Phil Mickelson</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 5 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier5"
              required
            >
              <option></option>
              <option>Rasmus Hojgaard</option>
              <option>Alexander Bjork</option>
              <option>Matthew Jordan</option>
              <option>Ewen Ferguson</option>
              <option>Thorbjorn Olesen</option>
              <option>Alex Noren</option>
              <option>Adam Schenk</option>
              <option>Victor Perez</option>
              <option>Jordan Smith</option>
              <option>Christiaan Bezuidenhout</option>
              <option>Tom Hoge</option>
              <option>Taylor Moore</option>
              <option>Nick Taylor</option>
              <option>Billy Horschel</option>
              <option>Daniel Hillier</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 6 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier6"
              required
            >
              <option></option>
              <option>Yannik Paul</option>
              <option>Davis Riley</option>
              <option>Andrew Putnam</option>
              <option>Brendon Todd</option>
              <option>K.H. Lee</option>
              <option>Abraham Ancer</option>
              <option>Pablo Larrazabal</option>
              <option>Lee Hodges</option>
              <option>Michael Kim</option>
              <option>Keita Nakajima</option>
              <option>Henrik Stenson</option>
              <option>Matt Wallace</option>
              <option>Francesco Molinari</option>
              <option>Richard Bland</option>
              <option>Laurie Canter</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 7 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier7"
              required
            >
              <option></option>
              <option>Rikuya Hoshino</option>
              <option>Takumi Kanaya</option>
              <option>Joost Luiten</option>
              <option>Richie Ramsay</option>
              <option>Guido Migliozzi</option>
              <option>Adrian Otaegui</option>
              <option>Antoine Rozner</option>
              <option>Matthew Southgate</option>
              <option>David Lingmerth</option>
              <option>Danny Willett</option>
              <option>Kalle Samooja</option>
              <option>Jorge Campillo</option>
              <option>Alex Fitzpatrick</option>
              <option>Romain Langasque</option>
              <option>Kyungnam Kang</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 8 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier8"
              required
            >
              <option></option>
              <option>Thriston Lawrence</option>
              <option>Charl Schwartzel</option>
              <option>Stewart Cink</option>
              <option>Dan Bradbury</option>
              <option>Ben Griffin</option>
              <option>Zach Johnson</option>
              <option>Jazz Janewattananond</option>
              <option>David Micheluzzi</option>
              <option>Marcel Siem</option>
              <option>Scott Stallings</option>
              <option>Connor Syme</option>
              <option>Sami Valimaki</option>
              <option>Adri Arnaus</option>
              <option>Alejandro Canizares</option>
              <option>Seungsu Han</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 9 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier9"
              required
            >
              <option></option>
              <option>Ernie Els</option>
              <option>Bio Kim</option>
              <option>Hurly Long</option>
              <option>Trey Mullinax</option>
              <option>Taiga Semikawa</option>
              <option>Callum Shinkwin</option>
              <option>Nacho Elvira</option>
              <option>Kazuki Higa</option>
              <option>Christo Lamprecht</option>
              <option>Travis Smyth</option>
              <option>Shubhankar Sharma</option>
              <option>Brandon Robinson Thompson</option>
              <option>Marc Warren</option>
              <option>Zack Fischer</option>
              <option>Jose Luis Ballester</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 10 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier10"
              required
            >
              <option></option>
              <option>Oliver Wilson</option>
              <option>Tiger Christensen</option>
              <option>Kyle Barker</option>
              <option>Haydn Barron</option>
              <option>Harrison Crowe</option>
              <option>Darren Clarke</option>
              <option>Oliver Farr</option>
              <option>Kensei Hirata</option>
              <option>Hiroshi Iwata</option>
              <option>Mateo Fernandez de Oliveira</option>
              <option>Taichi Kho</option>
              <option>Alex Maguire</option>
              <option>Marco Penge</option>
              <option>Connor McKinney</option>
              <option>Martin Rohwer</option>
              <option>Ockie Strydom</option>
              <option>Kazuki Yasumori</option>
              <option>John Daly</option>
              <option>Graeme Robertson</option>
              <option>Michael Stewart</option>
              <option>Gunner Wiebe</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex mt-12">
        <input
          type="submit"
          value="Submit"
          class="px-4 py-2 w-full bg-tournament-300 text-white rounded cursor-pointer hover:bg-tournament-500 transition-all ease-in-out duration-300"
        />
      </div>
    </form>
  </div>
  <div class="space-y-8">
    <div v-for="(item, index) in leaderboardStore.tierPlayers" :key="index">
      # - {{ index }}
    </div>
    <div
      v-for="(item, index) in leaderboardStore.tierGroups"
      :key="index"
      class="w-full"
    >
      <h2
        class="flex justify-center text-xs font-medium border-t px-4 text-tournament-900 border-tournament-900"
      >
        Tier {{ index + 1 }}
      </h2>

      <div class="text-sm">
        <div class="w-full">
          <tier-attributes />
        </div>
      </div>
      <div
        v-for="(player, j) in item"
        :key="j"
        class="w-full flex items-center border-b border-r border-l border-slate-300"
      >
        <div class="flex-1 px-2 py-0.5 bg-white flex align-center">
          <span class="text-sm">
            {{ player.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TierAttributes from "@/components/tiers/tier-attributes.vue";
import { useLeaderboardStore } from "@/stores/leaderboard";
import { useViewsStore } from "@/stores/views";

const leaderboardStore = useLeaderboardStore();
const event = useViewsStore().event;
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
}
.select-wrapper:after {
  content: "";
  display: block;
  height: 24px;
  width: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(../../assets/chevron-down.svg);
  background-size: 24px 24px;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
