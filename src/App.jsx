import React, { Component } from 'react'
import { Octocat } from './components/Octocat'

export class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="45"
                    height="45"
                    alt="GithubLogo"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>Octodex</strong>
                </a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/">Back to GitHub.com</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section>
            <Octocat
              articleImageLink="https://octodex.github.com//terracottocat/"
              octocatImage="https://octodex.github.com//images/Terracottocat_Single.png"
              name="Teracottocat"
              number="#149"
              author="chubbmo"
              authorImg="https://github.com/chubbmo.png"
              authorLink="https://github.com/chubbmo"
            />
            <Octocat
              articleImageLink="https://octodex.github.com//scubatocat/"
              octocatImage="https://octodex.github.com//images/scubatocat.png"
              name="Scubatocat"
              number="#38"
              author="cameronfoxly"
              authorImg="https://github.com/cameronfoxly.png"
              authorLink="https://github.com/cameronfoxly"
            />
            <Octocat
              articleImageLink="https://octodex.github.com//dinotocat/"
              octocatImage="https://octodex.github.com//images/dinotocat.png"
              name="Dinotocat"
              number="#130"
              author="kimestoesta"
              authorImg="https://github.com/kimestoesta.png"
              authorLink="https://github.com/kimestoesta"
            />
            <Octocat
              articleImageLink="https://octodex.github.com//spidertocat/"
              octocatImage="https://octodex.github.com//images/spidertocat.png"
              name="Spidertocat"
              number="#88"
              author="jeejkang"
              authorImg="https://github.com/jeejkang.png"
              authorLink="https://github.com/jeejkang"
            />
            <Octocat
              articleImageLink="https://octodex.github.com//octoqueer/"
              octocatImage="https://octodex.github.com//images/Octoqueer.png"
              name="OctoQueer"
              number="#150"
              author="cameronfoxly"
              authorImg="https://github.com/cameronfoxly.png"
              authorLink="https://github.com/cameronfoxly"
            />
            <Octocat
              articleImageLink="https://octodex.github.com//surftocat/"
              octocatImage="https://octodex.github.com//images/surftocat.png"
              name="Surftocat"
              number="#140"
              author="jeejkang"
              authorImg="https://github.com/jeejkang.png"
              authorLink="https://github.com/jeejkang"
            />

            <Octocat
              articleImageLink="https://octodex.github.com//hulatocat/"
              octocatImage="https://octodex.github.com//images/hula_loop_octodex03.gif"
              name="Hulatocat"
              number="#139"
              author="heyhayhay"
              authorImg="https://github.com/heyhayhay.png"
              authorLink="https://github.com/heyhayhay"
            />
            <Octocat
              articleImageLink="https://octodex.github.com//boxertocat/"
              octocatImage="https://octodex.github.com//images/boxertocat_octodex.jpg"
              name="Boxertocat"
              number="#141"
              author="rubyjazzy"
              authorImg="https://github.com/rubyjazzy.png"
              authorLink="https://github.com/rubyjazzy"
            />
          </section>
        </main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}
