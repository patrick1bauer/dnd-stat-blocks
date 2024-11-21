import styles from "@/styles/statBlocks.module.css";
import TaperedLine from "@/components/TaperedLine.jsx";

export default function Pseudodragon() {
  return (
    <>
    {/* Image */}
    <img className={styles.monsterImage} src="/2024/monsters/pseudodragon/Pseudodragon.png" />

      <div className={styles.statBlock}>
        <hr className={styles.orangeBorderTop} />
        <div className={styles.sectionLeft}>
          {/* Name & Alignment*/}
          <div className={styles.creatureHeading}>
            <h1>Pseudodragon</h1>
            <h2>Tiny Dragon, Neutral Good</h2>
          </div>

          <TaperedLine />

          {/* AC, HP, Speed */}
          <div className={styles.topStats}>
            <div className={styles.propertyLineFirst}>
              <h4>Armor Class</h4>
              <p>14</p>
            </div>
            <div className={styles.propertyLine}>
              <h4>Initiative</h4>
              <p>+2 (12)</p>
            </div>
            <div className={styles.propertyLine}>
              <h4>Hit Points</h4>
              <p>10 (3d4 + 3)</p>
            </div>
            <div className={styles.propertyLineLast}>
              <h4>Speed</h4>
              <p>15 ft., Fly 60 ft.</p>
            </div>

            <TaperedLine />

            {/* Abilities */}
            <div className={styles.abilities}>
              <div className={styles.abilityStrength}>
                <h4>STR</h4>
                <p>6 (-2)</p>
              </div>

              <div className={styles.abilityDexterity}>
                <h4>DEX</h4>
                <p>15 (+2)</p>
              </div>

              <div className={styles.abilityConstitution}>
                <h4>CON</h4>
                <p>13 (+1)</p>
              </div>

              <div className={styles.abilityIntelligence}>
                <h4>INT</h4>
                <p>10 (+0)</p>
              </div>

              <div className={styles.abilityWisdom}>
                <h4>WIS</h4>
                <p>12 (+1)</p>
              </div>

              <div className={styles.abilityCharisma}>
                <h4>CHA</h4>
                <p>10 (+0)</p>
              </div>
            </div>

            <TaperedLine />

            {/* Immunities, Skills, Senses, Languages, CR, Profieicney Bonus */}
            <div className={styles.propertyLineFirst}>
              <h4>Skills</h4>
              <p>Perception +5, Stealth +4</p>
            </div>

            <div className={styles.propertyLine}>
              <h4>Senses</h4>
              <p>Blindsight 10 ft., Darkvision 60 ft., Passive Perception 15</p>
            </div>

            <div className={styles.propertyLine}>
              <h4>Languages</h4>
              <p>Understands Common and Draconic but can't speak</p>
            </div>

            <div className={styles.propertyLineLast}>
              <h4>Challenge</h4>
              <p>1/4 (50 XP; PB +2)</p>
            </div>
          </div>

          <TaperedLine />

          {/* Features */}
          <div className={styles.propertyBlock}>
            <h4>Magic Resistance.</h4>
            <p>
              The pseudodragon has advantage on saving throws against spells and
              other magical effects.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.sectionRight}>
          <div className={styles.actions}>
            <h3>Actions</h3>

            <div className={styles.propertyBlock}>
              <h4>Multiattack.</h4>
              <p>The pseudodragon makes two Bite attacks.</p>
            </div>

            <div className={styles.propertyBlock}>
              <h4>Bite.</h4>
              <p>
                <i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft.
                <i>Hit:</i> 4 (1d4 + 2) piercing damage.
              </p>
            </div>

            <div className={styles.propertyBlock}>
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
        <hr className={styles.orangeBorderBottom} />
      </div>
      <h6>Source: PHB-2024</h6>
    </>
  );
}
