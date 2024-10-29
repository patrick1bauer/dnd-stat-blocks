import TaperedLine from "@/components/TaperedLine.jsx";

export default function Imp() {
  return (
    <>
      <div className="stat-block">
        <hr className="orange-border" />
        <div className="section-left">
          {/* Name & Alignment*/}
          <div className="creature-heading">
            <h1>Imp</h1>
            <h2>Tiny Dragon, Neutral Good</h2>
          </div>

          <div className="monster-image">
            <img src="/2024/monsters/Pseudodragon/Pseudodragon.png" />
          </div>

          <TaperedLine />

          {/* AC, HP, Speed */}
          <div className="top-stats">
            <div className="property-line first">
              <h4>Armor Class</h4>
              <p>14</p>
            </div>
            <div className="property-line">
              <h4>Initiative</h4>
              <p>+2 (12)</p>
            </div>
            <div className="property-line">
              <h4>Hit Points</h4>
              <p>10 (3d4 + 3)</p>
            </div>
            <div className="property-line last">
              <h4>Speed</h4>
              <p>15 ft., Fly 60 ft.</p>
            </div>

            <TaperedLine />

            {/* Abilities */}
            <div className="abilities">
              <div className="ability-strength">
                <h4>STR</h4>
                <p>6 (-2)</p>
              </div>

              <div className="ability-dexterity">
                <h4>DEX</h4>
                <p>15 (+2)</p>
              </div>

              <div className="ability-constitution">
                <h4>CON</h4>
                <p>13 (+1)</p>
              </div>

              <div className="ability-intelligence">
                <h4>INT</h4>
                <p>10 (+0)</p>
              </div>

              <div className="ability-wisdom">
                <h4>WIS</h4>
                <p>12 (+1)</p>
              </div>

              <div className="ability-charisma">
                <h4>CHA</h4>
                <p>10 (+0)</p>
              </div>
            </div>

            <TaperedLine />

            {/* Immunities, Skills, Senses, Languages, CR, Profieicney Bonus */}
            <div className="property-line first">
              <h4>Skills</h4>
              <p>Perception +5, Stealth +4</p>
            </div>

            <div className="property-line">
              <h4>Senses</h4>
              <p>Blindsight 10 ft., Darkvision 60 ft., Passive Perception 15</p>
            </div>

            <div className="property-line">
              <h4>Languages</h4>
              <p>Understands Common and Draconic but can't speak</p>
            </div>

            <div className="property-line last">
              <h4>Challenge</h4>
              <p>1/4 (50 XP; PB +2)</p>
            </div>
          </div>

          <TaperedLine />

          {/* Features */}
          <div className="property-block">
            <h4>Magic Resistance.</h4>
            <p>
              The pseudodragon has advantage on saving throws against spells and
              other magical effects.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="section-right">
          <div className="actions">
            <h3>Actions</h3>

            <div className="property-block">
              <h4>Multiattack.</h4>
              <p>The pseudodragon makes two Bite attacks.</p>
            </div>

            <div className="property-block">
              <h4>Bite.</h4>
              <p>
                <i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft.
                <i>Hit:</i> 4 (1d4 + 2) piercing damage.
              </p>
            </div>

            <div className="property-block">
              <h4>Sting.</h4>
              <p>
                <i>Constitution Saving Throw:</i> DC 12, one creature the
                pseudodragon can see within 5 feet.
                <i>Failure:</i> 5 (2d4) Poison damage, and the target has the
                Poisoned condition for 1 hour.
                <i>Failure by 5 or More:</i> The Poisoned target also has the
                Unconscious condition until it takes damage or another creature
                takes an action to shake it awake.
              </p>
            </div>

          </div>
        </div>
        <hr className="orange-border bottom" />
      </div>
      <h6>Source: PHB-2024</h6>
    </>
  );
}