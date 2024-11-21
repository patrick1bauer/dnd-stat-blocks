import styles from "@/styles/statBlocks.module.css";
import TaperedLine from "@/components/TaperedLine.jsx";

export default function Zombie() {
  return (
    <>
    {/* Image */}
    <img className={styles.monsterImage} src="/2024/monsters/zombie/Zombie.png" />

      <div className={styles.statBlock}>
        <hr className={styles.orangeBorderTop} />
        <div className={styles.sectionLeft}>
          {/* Name & Alignment*/}
          <div className={styles.creatureHeading}>
            <h1>Zombie</h1>
            <h2>Medium Undead, Neutral Evil</h2>
          </div>

          <TaperedLine />

          {/* AC, HP, Speed */}
          <div className={styles.topStats}>
            <div className={styles.propertyLineFirst}>
              <h4>Armor Class</h4>
              <p>8</p>
            </div>
            <div className={styles.propertyLine}>
              <h4>Initiative</h4>
              <p>-2 (8)</p>
            </div>
            <div className={styles.propertyLine}>
              <h4>Hit Points</h4>
              <p>15 (2d8 + 6)</p>
            </div>
            <div className={styles.propertyLineLast}>
              <h4>Speed</h4>
              <p>20 ft.</p>
            </div>

            <TaperedLine />

            {/* Abilities */}
            <div className={styles.abilities}>
              <div className={styles.abilityStrength}>
                <h4>STR</h4>
                <p>13 (+1)</p>
              </div>

              <div className={styles.abilityDexterity}>
                <h4>DEX</h4>
                <p>6 (-2)</p>
              </div>

              <div className={styles.abilityConstitution}>
                <h4>CON</h4>
                <p>16 (+3)</p>
              </div>

              <div className={styles.abilityIntelligence}>
                <h4>INT</h4>
                <p>3 (-4)</p>
              </div>

              <div className={styles.abilityWisdom}>
                <h4>WIS</h4>
                <p>6 (-2)</p>
              </div>

              <div className={styles.abilityCharisma}>
                <h4>CHA</h4>
                <p>5 (-3)</p>
              </div>
            </div>

            <TaperedLine />

            {/* Immunities, Skills, Senses, Languages, CR, Profieicney Bonus */}
            <div className={styles.propertyLineFirst}>
              <h4>Immunities</h4>
              <p>Poison, Exhaustion, Poisoned</p>
            </div>

            <div className={styles.propertyLine}>
              <h4>Senses</h4>
              <p>Darkvision 60 ft., Passive Perception 8</p>
            </div>

            <div className={styles.propertyLine}>
              <h4>Languages</h4>
              <p>Understands the languages it knew in life but can't speak</p>
            </div>

            <div className={styles.propertyLineLast}>
              <h4>Challenge</h4>
              <p>1/4 (50 XP; PB +2)</p>
            </div>
          </div>

          <TaperedLine />

          {/* Features */}
          <div className={styles.propertyBlock}>
            <h4>Undead Fortitude.</h4>
            <p>
              If damage reduces the zombie to 0 Hit Points, it must make a Constitution saving throw with a DC of 5 plus the damage taken unless the damage is Radiant or from a Critical Hit. On a successful save, the zombie drops to 1 Hit Point instead.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.sectionRight}>
          <div className={styles.actions}>
            <h3>Actions</h3>

            <div className={styles.propertyBlock}>
              <h4>Slam.</h4>
              <p>
                <i>Melee Weapon Attack:</i> +3 to hit, reach 5 ft. 
                <i> Hit:</i> 4 (1d6 + 1) Bludgeoning damage.
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
