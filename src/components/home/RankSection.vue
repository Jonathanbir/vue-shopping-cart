<template>
  <div class="rank-section">
    <h1>巧克力排名</h1>
    <div>
      <div class="item" style="width: 100%; display: inline-block">
        <div class="item-inner">
          <div class="vote_info">
            <div class="rank-mark">
              <p>1</p>
            </div>
            <h4>Top1</h4>
            <h5>花生巧克力</h5>
            <div class="vote_number">
              <img
                src="https://tibamef2e.com/ced101/project/g1/Images/vote_medium.svg"
                alt=""
              />
              <span>22</span>票
            </div>
          </div>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.wMLCZf4PeCM13ndGCe_Y7QHaE8&pid=Api&P=0"
          />
          <div class="triangle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.rank-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  margin: 100px auto;

  .item {
    .item-inner {
      position: relative;
      width: 80%;
      height: 100%;
      border: 1px solid #b3925b;
      margin: 0 auto;
      -webkit-clip-path: polygon(0 80%, 0 0, 100% 0, 100% 100%, 20% 100%);
      clip-path: polygon(0 80%, 0 0, 100% 0, 100% 100%, 20% 100%);
      background-color: white;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      .vote_info {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        line-height: 36px;
        justify-content: space-between;
        padding-top: 10px;

        .rank-mark {
          position: absolute;
          top: 0;
          right: 0px;
          width: 100px;
          height: 100px;
          background-image: url("../../images/chocolate/chocolate-01.png");
          background-size: 100%;
          background-position: center center;
          background-repeat: no-repeat;
          transform: rotate(40deg);

          p {
            position: relative;
            top: 6px;
            right: 0;
            font-size: 25px;
            color: rgb(253, 236, 4);
            font-weight: 800;
            transform: rotate(-40deg);
          }
        }

        h4 {
          font-size: 1rem;
          letter-spacing: 0.8rem;
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          color: #b3925b;
          margin: 10px;
        }

        h5 {
          font-size: 1.5rem;
          letter-spacing: 1rem;
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          margin: 10px;
        }

        .vote_number {
          display: inline-flex;
          align-items: center;
          font-size: 1rem;
          letter-spacing: 0.5rem;
          font-family: "Roboto", sans-serif;
          margin: 10px auto 20px;

          img {
            margin: 0 auto;
            margin-right: 10px;
            max-width: 100%;
          }
        }

        span {
          font-size: 1.4rem;
          letter-spacing: 0.5rem;
          font-family: "Roboto", sans-serif;
          line-height: 3px;
          font-weight: bold;
        }
      }
      .triangle {
        width: 100px;
        height: 100px;
        background-color: #504024;
        position: absolute;
        border-radius: 0 10px 0;
        left: -14px;
        bottom: -14px;
      }
      img {
        margin: 0 auto;
        margin-right: 10px;
        max-width: 100%;
      }
    }
  }
  h1 {
    margin-bottom: 50px;
  }
}
</style>
