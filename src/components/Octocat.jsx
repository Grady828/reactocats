import React from 'react'
export class Octocat extends React.Component {
  render() {
    return (
      <section>
        <article>
          <a href={this.props.articleImageLink}>
            <img
              src={this.props.octocatImage}
              width="400"
              height="400"
              alt={this.props.name}
            />
          </a>
          <ul>
            <li>
              {this.props.number}:
              <a href={this.props.articleImageLink}>
                <strong>{this.props.name}</strong>
              </a>
            </li>
            <li>
              <a href={this.props.authorLink}>
                <img
                  src={this.props.authorImg}
                  width="24px"
                  height="24px"
                  alt={this.props.author}
                />
              </a>
            </li>
          </ul>
        </article>
      </section>
    )
  }
}
