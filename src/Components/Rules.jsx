import React from 'react';
import { HiOutlineInformationCircle } from "react-icons/hi";
import { PiScrollDuotone } from "react-icons/pi";

const RuleSection = ({ title, rules }) => (
    <div className='p-1 w-[48%] h-max mt-10 rounded-xl font-outfit bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900'>
        <div className="p-6 bg-[#162333] text-blue-100 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <ul className="list-disc pl-6">
            {rules.map((rule, index) => (
              <li key={index} className="mb-2 flex items-start">
                <span className="mr-2">
                  <HiOutlineInformationCircle className="h-5 w-5 text-sky-200" /> {/* Example HeroIcon */}
                </span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );

const RulesPage = () => {
  return (
    <div className="p-8 font-outfit pt-40 bg-[#0b1227]">
      <h1 className="text-6xl font-semibold mb-8 flex items-center gap-x-4">
        <div className='bg-blue-50 p-3 rounded-full'>
            <PiScrollDuotone className='text-blue-800'/>
        </div>
        <div className='text-white'>Community Rules</div>
    </h1>

    <div className='flex gap-x-10 flex-wrap'>
    <RuleSection title="Criminal Activity" rules={[
    "Maximum 4 players for PvP criminal activities, 6 for gangs",
    "Communication as lookout over radio counts as participation in criminal activities",
    "No looting/robbing without prior altercation",
    "Robbing cops permissible with valid RP reason",
    "RP backed Robbery limited to physical items: no bank transfer demands",
    "There is no max amount of hostages you can have nor are there a guaranteed amount of demands you get per hostage",
    "Any player not partaking in a business or government activity can be used as a hostage for a heist",
    // ... (add more rules)
]} />

<RuleSection title="Scene" rules={[
    "When conducting robberies and various heist based crimes, escalating a getaway or crime event into a shootout should be last resort",
    "Conducting crimes with the sole intent to eventually kill a cop is heavily",
    "When initiating gun usage, give opportunity to let the opponent surrender and only shoot if necessary (ex: when they pull out a weapon or are about to fire upon you",
    // ... (add more rules)
]} />

<RuleSection title="Scene Presence" rules={[
    "Logging out before a scene is over / Combat Logging [G] / Reviving before medical can pick you up is strictly",
    "All players must be in a bathroom, locker room, or in their house (out of sight) if AFK",
    "Intentionally Logging out of the server / Disconnecting in front of other players is prohibited. Do so in a bathroom, house, or where you are not seen.",
    // ... (add more rules)
]} />

<RuleSection title="Powergaming" rules={[
    "Running into an apartment or building that cops would not be able to access",
    "No item transfers that bypass gameplay mechanics, such as between two of your own characters.",
    "Avoid unrealistic actions (e.g., wall emoting, motorcycle carrying).",
    "The spam creation of characters.",
    // ... (add more rules)
]} />

<RuleSection title="Scene Interference" rules={[
    "No intervening in ongoing robberies. Do not forcefully take over someone else's heist",
    "Inserting yourself into a scene without an RP reason to do so.",
    // ... (add more rules)
]} />

<RuleSection title="OOC" rules={[
    "Stay in character; use /ooc for scuffs only",
    "If there is a rulebreak, continue with the scene in character and make a staff report.",
    // ... (add more rules)
]} />

<RuleSection title="Character Information" rules={[
    "All character names must be realistic, troll named characters will be deleted",
    "Characters first and last name must have a capital first letter",
    "Gang and Street names are fine as nicknames, but all players official created names must follow these guidelines.",
    "Character names must be unique, use a name generator if needed.",
    "Must know a general background of your character before you play them",
    "Character Development - the events that happen to your server should affect and change them overtime",
    // ... (add more rules)
]} />

<RuleSection title="NVL - No Value of Life" rules={[
    "Players must act in a way that reflects the value of their character's life",
    "In response to roleplay events, players should take actions that would realistically be taken to preserve their own life",
    "This includes surrendering if backed into a corner with your hands up from cops or criminals and avoiding speeds on unsafe roads, collisions with other cars, or unrealistic jumps while driving",
    "Returning to an active conflict, shootout, or scene after being downed and revived.",
    "Potential and Active hostages are expected to value their lives and not run when there are weapons held by their hostage-taker that can harm them.",
    "Players should have reasonable fears, such as avoiding crimes they wouldn't get away with in front of law enforcement or government officials.",
    // ... (add more rules)
]} />

<RuleSection title="Metagaming" rules={[
    "Limit knowledge to in-game learned information.",
    "No discussing alternate characters unless correcting misidentification.",
    "Criminals partaking in a crime should act as if they do not know internal law enforcement policy unless directly told by the law enforcement officers on scene.",
    // ... (add more rules)
]} />

<RuleSection title="Voice ID" rules={[
    "Identify players by appearance only, not voice.",
    "Differentiate voices between your characters when possible. (pitch / accent / verbiage)",
    // ... (add more rules)
]} />

<RuleSection title="Gang Rules" rules={[
    "All formal gangs need to be registered with administration",
    "Gangs are held to a higher standard of all rules listed in this rule list.",
    // ... (add more rules)
]} />

<RuleSection title="New Life Rule" rules={[
    "Ocean Dumping - If you are downed and left in the ocean, you may not remember the immediate scene prior.",
    "If you are downed and revived without touching the ocean, you may remember everything prior.",
    "If you [G] /revive you may not remember the immediate scene prior.",
    // ... (add more rules)
]} />

<RuleSection title="NITRP" rules={[
    "Robbery of a business should only be done for a specific item or item stack and requires prior interaction with the player working there.",
    "Prohibit tackling/punching without RP reason to do so.",
    "Tackling and punching people for no reason",
    "Over-escalating a scene into conflict or violence without an in-RP reason to do so",
    "Streamsniping / Fanboying / Fangirling",
    "Talking or calling out locations while unconscious or downed is prohibited.",
    "Killing a player should be the last resort, immediately escalating to kill someone without an in RP reason to escalate it in that way is considered NITRP",
    "Malding, expressing OOC feelings or words that your character themselves wouldn't say",
    "Cop Baiting - engaging in crimes or actions for the sole purpose of law enforcement's attention.",
    "Prioritizing winning over the roleplay quality overall is prohibited.",
    "Con Artist / Scam Roleplay against other players for monetary gain is prohibited.",
    "RDM - Killing allowed only with prior interaction and valid RP reason.",
    "VDM - No random or deliberate vehicle assaults without RP context.",
    "Pocket Wiping - Take only necessary items; no ID/license theft without RP reason to do so.",
    // ... (add more rules)
]} />

<RuleSection title="Failure to Roleplay" rules={[
    "Go with the scene, if events happen to you or around you, your character should organically respond to it as fit for their personality.",
    "Not responding to /me interactions",
    "Talking While Dead is prohibited.",
    "All badge pictures and ID's must be within server picture of your RP character.",
    // ... (add more rules)
]} />

<RuleSection title="Conflict Resolution" rules={[
    "Resolve disputes in-character when possible.",
    "Use tickets for unresolved issues.",
    // ... (add more rules)
]} />
    </div>

      {/* Repeat RuleSection for other rule categories */}

    </div>
  );
};

export default RulesPage;
