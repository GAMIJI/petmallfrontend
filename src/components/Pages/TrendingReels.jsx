import React from 'react'

const TrendingReels = () => {
  return (
    <div>
        <section className="reels__area">
            <div className="container">
              <div className="col-md-8">
                <div className="section__title-two mb-30">
                  <h2 className="title">
                    Trending Reels
                    <img
                      src="assets/img/images/title_shape.svg"
                      alt=""
                      className="injectable"
                    />
                  </h2>
                </div>
              </div>
              <div className="reels-container">
                <div className="reels">
                  {/* Reel 1 */}
                  <div className="reel-item">
                    <div className="reel-video-wrapper">
                      <video
                        className="reel-video"
                        autoPlay=""
                        muted=""
                        loop=""
                      >
                        <source
                          src="assets/reels/139433-772291290_small.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="reel-info">
                      <p className="reel-username">@petgroomer_101</p>
                      <p className="reel-description">
                        Learn step-by-step how to maintain a clean and healthy
                        pet.
                      </p>
                    </div>
                  </div>
                  {/* Reel 2 */}
                  <div className="reel-item">
                    <div className="reel-video-wrapper">
                      <video
                        className="reel-video"
                        autoPlay=""
                        muted=""
                        loop=""
                      >
                        <source
                          src="assets/reels/156962-813912944_small.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="reel-info">
                      <p className="reel-username">@cutepuppiesdaily</p>
                      <p className="reel-description">
                        Watch these adorable puppies having a blast together!
                        Pure joy in motion.
                      </p>
                    </div>
                  </div>
                  {/* Reel 3 */}
                  <div className="reel-item">
                    <div className="reel-video-wrapper">
                      <video
                        className="reel-video"
                        autoPlay=""
                        muted=""
                        loop=""
                      >
                        <source
                          src="assets/reels/157990-815894937_tiny.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="reel-info">
                      <p className="reel-username">@adorablecatsdaily</p>
                      <p className="reel-description">
                        These little kittens are ready to melt your heart. Watch
                        their playful antics!
                      </p>
                    </div>
                  </div>
                  {/* Reel 4 */}
                  <div className="reel-item">
                    <div className="reel-video-wrapper">
                      <video
                        className="reel-video"
                        autoPlay=""
                        muted=""
                        loop=""
                      >
                        <source
                          src="assets/reels/210733_medium.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="reel-info">
                      <p className="reel-username">@petadoptionstories</p>
                      <p className="reel-description">
                        Watch this beautiful journey of adopting a pet and
                        giving them a loving home.
                      </p>
                    </div>
                  </div>
                  {/* Reel 5 */}
                  <div className="reel-item">
                    <div className="reel-video-wrapper">
                      <video
                        className="reel-video"
                        autoPlay=""
                        muted=""
                        loop=""
                      >
                        <source
                          src="assets/reels/26314-357839024_small.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="reel-info">
                      <p className="reel-username">@doggos_love_snow</p>
                      <p className="reel-description">
                        Watch these dogs having the time of their lives in the
                        snow! So much fun and happiness.
                      </p>
                    </div>
                  </div>
                  {/* Reel 6 */}
                  <div className="reel-item">
                    <div className="reel-video-wrapper">
                      <video
                        className="reel-video"
                        autoPlay=""
                        muted=""
                        loop=""
                      >
                        <source
                          src="assets/reels/5631-183849543_medium.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="reel-info">
                      <p className="reel-username">@playfulpups</p>
                      <p className="reel-description">
                        These playful puppies are sure to bring a smile to your
                        face. Watch them have fun!
                      </p>
                    </div>
                  </div>
                  {/* Additional Reels... */}
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default TrendingReels