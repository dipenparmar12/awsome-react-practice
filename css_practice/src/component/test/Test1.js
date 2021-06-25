import React from 'react'
import Tabs from '../../reactive/tab/Tabs';

const Test1 = () => {
  return (
    <>
      <Tabs active={'Test 1'}>
        <div data-tabName={'Test 1'}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <header>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
              explicabo alias soluta? Impedit cum aut officiis. Saepe quibusdam sunt
              aspernatur voluptas veniam nulla. Ex fuga explicabo quae cupiditate
              quasi fugit blanditiis nemo reiciendis! Possimus iste ab, fuga quos
              cupiditate, iusto, natus quibusdam repudiandae autem ipsum ex! Fugiat,
              ullam. Dicta harum, id molestias blanditiis laboriosam amet tempore
              doloremque a. Laudantium numquam impedit vitae, asperiores similique
              deserunt iusto excepturi ratione dolorum facere fugiat, qui rerum?
              Repellendus quam sunt illum quas sint optio perferendis? Accusamus
              debitis quos deleniti tenetur eius natus officia ipsa. Quaerat
              exercitationem dolore incidunt quasi aperiam magnam corporis iste
              voluptates.
            </header>
            <main
                style={{
                  /* take the remaining height */
                  flexGrow: 1 /* layout the left sidebar, main content and right sidebar */,
                  display: 'flex',
                  flexDirection: 'row',
                }}
            >
              {/* Left sidebar */}
              <aside style={{ width: '25%' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
                odio temporibus fugit eaque illum nesciunt perferendis esse ratione,
                animi laudantium? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Deleniti consequatur quibusdam dicta soluta
                asperiores nesciunt aut? Cumque nisi accusantium id quis, quia
                repudiandae qui molestias accusamus, ipsum excepturi, similique et.
              </aside>
              {/* Main content */}
              <article
                  style={{
                    /* take the remaining width */ flexGrow: 1,
                  }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                est asperiores, tempore corporis vitae optio beatae architecto
                accusamus iusto ipsam ipsum ipsa natus quia temporibus modi eius
                maxime animi. Vitae adipisci, nobis dolorem velit minima, officiis
                maxime doloremque aperiam repudiandae placeat illo saepe eum aliquam
                quaerat consectetur iure perspiciatis error, alias nesciunt pariatur
                laboriosam itaque! Deleniti at sequi quasi culpa laudantium magni!
                Delectus dolore iusto animi consectetur facilis laudantium
                reiciendis quidem molestiae cum, obcaecati, dolores possimus eum
                eveniet amet illum dicta nostrum itaque tempora repellendus placeat
                at. Tempore consequatur, amet asperiores magnam numquam, explicabo
                voluptate deserunt cupiditate dolore, fuga itaque.
              </article>
              {/* Right sidebar */}
              <nav style={{ width: '20%' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                possimus aliquam maxime? Voluptatum, nesciunt? Hic, natus? Officiis
                maxime magnam distinctio soluta veritatis saepe quia cum. Tempora
                distinctio dolore culpa est.
              </nav>
            </main>
            <footer>
              footer,footerfooterfooterfooterfooterfooterfoolorem Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Consectetur sunt odio labore
              sit animi unde qui accusantium libero voluptates ex molestias
              architecto, corporis veniam velit similique ullam, earum asperiores
              inventore, quia eaque maxime! Magnam deserunt voluptates animi illum
              praesentium cumque fuga modi. Similique mollitia enim, voluptatibus
              excepturi repellendus amet natus exercitationem dicta qui. Adipisci,
              repellendus non reprehenderit fugiat voluptas cupiditate. Perferendis
              molestiae totam unde porro quisquam provident alias perspiciatis
              temporibus labore fugiat blanditiis deleniti nisi, ad ipsam natus
              asperiores numquam aspernatur, voluptatem inventore harum. Sit minima
              odio pariatur doloribus ab sapiente tempora nam aspernatur laborum
              illo quos, itaque cupiditate nostrum!
              terfooterfooterfooterfooterfooter
            </footer>
          </div>
        </div>
      </Tabs>
    </>
  )
}

export default Test1
