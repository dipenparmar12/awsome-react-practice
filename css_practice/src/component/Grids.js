import React from 'react'
import './grid/grids.scss'
import Tabs from '../reactive/tab/Tabs';
import GridTwoSection from '../practice/jonas/GridTwoSection';

const Grids = () => {
  return (
      <>
        <Tabs>
          <Tabs.Tab tabName={'Method 1'}>
            {/* Method 1 */}
            <div className={'grid w-1200 center-h py-2'}>
              <header className='header'> Header</header>
              <div className='box'>1</div>
              <div className='box'>2</div>
              <div className='box'>3</div>
              <div className='sidebar'>Sidebar</div>
              <div className='content'>Content</div>
              <footer className='footer'>footer</footer>
            </div>
          </Tabs.Tab>

          <Tabs.Tab tabName={'Method 2'}>
            {/* Method 2 */}
            <div className={'grid-names w-1200 center-h py-2'}>
              <header className='header'> Header</header>
              <div className='box'>1</div>
              <div className='box'>2</div>
              <div className='box'>3</div>
              <div className='sidebar'>Sidebar</div>
              <div className='content'>Content</div>
              <footer className='footer'>footer</footer>
            </div>
          </Tabs.Tab>

          <Tabs.Tab tabName={'GridSection'}>
            <GridTwoSection/>
          </Tabs.Tab>

          <Tabs.Tab tabName={'Grid60'}>
            {/* .g6_container>.g6.g6_${cell $}*60 */}
            <div className="g6_container">
              <div className="g6 g6_1">cell 1</div>
              <div className="g6 g6_2">cell 2</div>
              <div className="g6 g6_3">cell 3</div>
              <div className="g6 g6_4">cell 4</div>
              <div className="g6 g6_5">cell 5</div>
              <div className="g6 g6_6">cell 6</div>
              <div className="g6 g6_7">cell 7</div>
              <div className="g6 g6_8">cell 8</div>
              <div className="g6 g6_9">cell 9</div>
              <div className="g6 g6_10">cell 10</div>
              <div className="g6 g6_11">cell 11</div>
              <div className="g6 g6_12">cell 12</div>
              <div className="g6 g6_13">cell 13</div>
              <div className="g6 g6_14">cell 14</div>
              <div className="g6 g6_15">cell 15</div>
              <div className="g6 g6_16">cell 16</div>
              <div className="g6 g6_17">cell 17</div>
              <div className="g6 g6_18">cell 18</div>
              <div className="g6 g6_19">cell 19</div>
              <div className="g6 g6_20">cell 20</div>
              <div className="g6 g6_21">cell 21</div>
              <div className="g6 g6_22">cell 22</div>
              <div className="g6 g6_23">cell 23</div>
              <div className="g6 g6_24">cell 24</div>
              <div className="g6 g6_25">cell 25</div>
              <div className="g6 g6_26">cell 26</div>
              <div className="g6 g6_27">cell 27</div>
              <div className="g6 g6_28">cell 28</div>
              <div className="g6 g6_29">cell 29</div>
              <div className="g6 g6_30">cell 30</div>
              <div className="g6 g6_31">cell 31</div>
              <div className="g6 g6_32">cell 32</div>
              <div className="g6 g6_33">cell 33</div>
              <div className="g6 g6_34">cell 34</div>
              <div className="g6 g6_35">cell 35</div>
              <div className="g6 g6_36">cell 36</div>
              <div className="g6 g6_37">cell 37</div>
              <div className="g6 g6_38">cell 38</div>
              <div className="g6 g6_39">cell 39</div>
              <div className="g6 g6_40">cell 40</div>
              <div className="g6 g6_41">cell 41</div>
              <div className="g6 g6_42">cell 42</div>
              <div className="g6 g6_43">cell 43</div>
              <div className="g6 g6_44">cell 44</div>
              <div className="g6 g6_45">cell 45</div>
              <div className="g6 g6_46">cell 46</div>
              <div className="g6 g6_47">cell 47</div>
              <div className="g6 g6_48">cell 48</div>
              <div className="g6 g6_49">cell 49</div>
              <div className="g6 g6_50">cell 50</div>
              <div className="g6 g6_51">cell 51</div>
              <div className="g6 g6_52">cell 52</div>
              <div className="g6 g6_53">cell 53</div>
              <div className="g6 g6_54">cell 54</div>
              <div className="g6 g6_55">cell 55</div>
              <div className="g6 g6_56">cell 56</div>
              <div className="g6 g6_57">cell 57</div>
              <div className="g6 g6_58">cell 58</div>
              <div className="g6 g6_59">cell 59</div>
              <div className="g6 g6_60">cell 60</div>
            </div>
          </Tabs.Tab>

          <Tabs.Tab tabName={'Grid 35'}>
            {/* .g7.container>.i.i_${cell $}*35 */}
            <div className="g7 container">
              <div className="i i_1">cell 1</div>
              <div className="i i_2">cell 2</div>
              <div className="i i_3">cell 3</div>
              <div className="i i_4">cell 4</div>
              <div className="i i_5">cell 5</div>
              <div className="i i_6">cell 6</div>
              <div className="i i_7">cell 7</div>
              <div className="i i_8">cell 8</div>
              <div className="i i_9">cell 9</div>
              <div className="i i_10">cell 10</div>
              <div className="i i_11">cell 11</div>
              <div className="i i_12">cell 12</div>
              <div className="i i_13">cell 13</div>
              <div className="i i_14">cell 14</div>
              <div className="i i_15">cell 15</div>
              <div className="i i_16">cell 16</div>
              <div className="i i_17">cell 17</div>
              <div className="i i_18">cell 18</div>
              <div className="i i_19">cell 19</div>
              <div className="i i_20">cell 20</div>
              <div className="i i_21">cell 21</div>
              <div className="i i_22">cell 22</div>
              <div className="i i_23">cell 23</div>
              <div className="i i_24">cell 24</div>
              <div className="i i_25">cell 25</div>
              <div className="i i_26">cell 26</div>
              <div className="i i_27">cell 27</div>
              <div className="i i_28">cell 28</div>
              <div className="i i_29">cell 29</div>
              <div className="i i_30">cell 30</div>
              <div className="i i_31">cell 31</div>
              <div className="i i_32">cell 32</div>
              <div className="i i_33">cell 33</div>
              <div className="i i_34">cell 34</div>
              <div className="i i_35">cell 35</div>
            </div>
          </Tabs.Tab>

          <Tabs.Tab tabName={'Grid 13'}>
            {/* .g8.container>.i.i_${cell $}*13 */}
            <div className="g8 container">
              <div className="i i_1">cell 1</div>
              <div className="i i_2">cell 2</div>
              <div className="i i_3">cell 3</div>
              <div className="i i_4">cell 4</div>
              <div className="i i_5">cell 5</div>
              <div className="i i_6">cell 6</div>
              <div className="i i_7">cell 7</div>
              <div className="i i_8">cell 8</div>
              <div className="i i_9">cell 9</div>
              <div className="i i_10">cell 10</div>
              <div className="i i_11">cell 11</div>
              <div className="i i_12">cell 12</div>
              <div className="i i_13">cell 13</div>
            </div>
          </Tabs.Tab>

          <Tabs.Tab tabName={'GRID 9'}>
            <div className="g9 container">
              <div className="card">
                <div className="content">
                  <div>
                    <img className="img" src={`https://source.unsplash.com/random/200x200?sig=1`}/>
                    <div className="left">
                      <div className="title">Card Title1</div>
                      <div className="autor_name">Autor name</div>
                      <div className="desc">lorem</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div>
                    <img className="img" src={`https://source.unsplash.com/random/200x200?sig=2`}/>
                    <div className="left">
                      <div className="title">Card Title2</div>
                      <div className="autor_name">Autor name</div>
                      <div className="desc">lorem</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div>
                    <img className="img" src={`https://source.unsplash.com/random/200x200?sig=2`}/>
                    <div className="left">
                      <div className="title">Card Title3</div>
                      <div className="autor_name">Autor name</div>
                      <div className="desc">lorem</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Tab>

          <Tabs.Tab tabName={'asdf'}>
          </Tabs.Tab>

        </Tabs>
      </>
  )

  // return (
  //     <>
  //       {/* .g6_container>.g6.g6_${cell $}*60 */}
  //       {/* .g7.container>.i.i_${cell $}*35 */}
  //       {/* .g8.container>.i.i_${cell $}*13 */}
  //       {/* .g9.container>(.card>.content>div>img.img[src="$"]+div.left>.title{Card Title$}+.autor_name{Autor name}+.desc{lorem})*3 */}
  //       {/*.g9.container>(.card>.content>div>img.img[src="$"]+div.left>.title{Card Title$}+.autor_name{Autor name}+.desc{lorem})*3*/}
  //     </>
  // )
}

export default Grids
