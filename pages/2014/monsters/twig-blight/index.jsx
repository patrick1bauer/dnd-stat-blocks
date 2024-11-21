import styles from "@/styles/statBlocks.module.css";
import TaperedLine from "@/components/TaperedLine.jsx";

export default function TwigBlight() {
  return (
    <>
    {/* Image */}
    <img className={styles.monsterImage} src="/2014/monsters/twig-blight/Twig-Blight.png" />

      <div className={styles.statBlock}>
        <hr className={styles.orangeBorderTop} />
        <div className={styles.sectionLeft}>
          {/* Name & Alignment*/}
          <div className={styles.creatureHeading}>
            <h1>Twig Blight</h1>
            <h2>Small Plant, Neutral Evil</h2>
          </div>

          <TaperedLine />

          {/* AC, HP, Speed */}
          <div className={styles.topStats}>
            <div className={styles.propertyLineFirst}>
              <h4>Armor Class</h4>
              <p>13</p>
            </div>
            <div className={styles.propertyLine}>
              <h4>Hit Points</h4>
              <p>4 (1d6 + 1)</p>
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
                <p>6 (-2)</p>
              </div>

              <div className={styles.abilityDexterity}>
                <h4>DEX</h4>
                <p>13 (+1)</p>
              </div>

              <div className={styles.abilityConstitution}>
                <h4>CON</h4>
                <p>12 (+1)</p>
              </div>

              <div className={styles.abilityIntelligence}>
                <h4>INT</h4>
                <p>4 (-3)</p>
              </div>

              <div className={styles.abilityWisdom}>
                <h4>WIS</h4>
                <p>8 (-1)</p>
              </div>

              <div className={styles.abilityCharisma}>
                <h4>CHA</h4>
                <p>3 (-4)</p>
              </div>
            </div>

            <TaperedLine />

            {/* Immunities, Skills, Senses, Languages, CR, Profieicney Bonus */}
            <div className={styles.propertyLineFirst}>
              <h4>Skills</h4>
              <p>Stealth +3</p>
            </div>

            <div className={styles.propertyLine}>
              <h4>Damage Vulnerabilities</h4>
              <p>Fire</p>
            </div>

            <div className={styles.propertyLine}>
              <h4>Condition Immunities</h4>
              <p>Blinded, Deafened</p>
            </div>

            <div className={styles.propertyLine}>
              <h4>Senses</h4>
              <p>Blindsight 60 ft. (blind beyond this radius), Passive Perception 9</p>
            </div>

            <div className={styles.propertyLine}>
              <h4>Languages</h4>
              <p>Understands Common but can't speak</p>
            </div>

            <div className={styles.propertyLineLast}>
              <h4>Challenge</h4>
              <p>1/8 (25 XP; PB +2)</p>
            </div>
          </div>

          <TaperedLine />

          {/* Features */}
          <div className={styles.propertyBlock}>
            <h4>False Appearance.</h4>
            <p>
              While the blight remains motionless, it is indistinguishable from a dead shrub.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.sectionRight}>
          <div className={styles.actions}>
            <h3>Actions</h3>

            <div className={styles.propertyBlock}>
              <h4>Claws.</h4>
              <p>
                <i>Melee Weapon Attack:</i> +3 to hit, reach 5 ft.
                <i> Hit:</i> 3 (1d4 + 1) piercing damage.
              </p>
            </div>

          </div>
        </div>
        <hr className={styles.orangeBorderBottom} />
      </div>
      <h6>Source: Basic Rules (2014)</h6>
    </>
  );
}
