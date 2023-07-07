import React, { useEffect, useRef } from 'react';

const ParMain = () => {
  const canvasRef = useRef(null);
  let c; //canvas
  let $; //context
  let w; //width
  let h; //height
  const num = 100; //num points > length of line
  const pts = []; //point array
  const pt_maxw = 5; //max point width
  const pt_minw = 1; //min point width
  const spr = 0.419; //springyness > higher will give a web-like effect / lower reduces the curvyness
  const fric = 0.5; // friction > the amount of control mousemoves have on lines.
  const grav = 0.0; //gravity > higher than 0 for starting pt will drag lines downward.
  const fps = 1000 / 30;
  let timer;
  let ms; //mouse

  useEffect(() => {
    c = canvasRef.current;
    $ = c.getContext('2d');
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
    c.width = w;
    c.height = h;

    const makePts = () => {
      for (let i = 0; i < num; i += 1) {
        let x, y, w, h;
        w = Math.floor(Math.random() * (pt_maxw - pt_minw + 1)) + pt_minw;
        h = w;
        x = w * 0.7;
        y = h * 0.5;

        const pt = new Pt(x, y, w, h);
        pts[i] = pt;
      }
    };

    const save = () => {
      $.fillStyle = 'rgba(0, 0, 0, 0.1)';
      $.fillRect(0, 0, w, h);
    };

    const draw = () => {
      for (let i = 0; i < num; i += 1) {
        const pt = pts[i];
        if (!ms) return;
        if (i === 0) {
          pt.move(ms.x, ms.y);
          pt.draw(ms.x, ms.y);
        } else {
          pt.move(pts[i - 1].x, pts[i - 1].y);
          pt.draw(pts[i - 1].x, pts[i - 1].y);
        }
      }
    };

    const upd = () => {
      save();
      draw();
    };

    function Pt(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.vx = 0;
      this.vy = 0;
      this.rad = w * 0.55;
      this.mass = 40;
      this.col = this.rndCol();
    }

    Pt.prototype = {
      move: function(t_x, t_y) {
        const dx = t_x - this.x;
        const dy = t_y - this.y;

        const ax = dx * spr;
        const ay = dy * spr;

        this.vx += ax;
        this.vy += ay;

        this.vy += grav * this.mass;

        this.vx *= fric;
        this.vy *= fric;

        this.x += this.vx;
        this.y += this.vy;
      },

      draw: function(t_x, t_y) {
        $.save();
        const gradient = $.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.rad
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(1, this.col);
        $.fillStyle = gradient;
        $.beginPath();
        $.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
        $.fill();
        $.restore();

        $.save();
        $.beginPath();
        $.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        $.moveTo(t_x, t_y);
        $.lineTo(this.x, this.y);
        $.stroke();
        $.restore();
      },

      rndCol: function() {
        const r = Math.floor(Math.random() * 255 + 1);
        const g = Math.floor(Math.random() * 255 + 1);
        const b = Math.floor(Math.random() * 255 + 1);

        return `rgb(${r},${g},${b})`;
      },
    };

    const go = () => {
      makePts();
      timer = setInterval(upd, fps);
    };
    const upd_ms_pos = (e) => {
      ms = {};
      if (e) {
        ms.x = e.pageX;
        ms.y = e.pageY;
      } else {
        ms.x = e.x + document.body.scrollLeft;
        ms.y = e.y + document.body.scrollTop;
      }
      return ms;
    };
    const msMove = (e) => {
      upd_ms_pos(e);
    };

   document.onmousemove = function(e) {
  msMove(e);
};
window.requestAnimFrame(go);
  }, []);

  return <canvas id="canv" ref={canvasRef}></canvas>;
};

export default ParMain;
