function rgb2hsv(){var t,n,r,u,e,a=arguments[0]/255,c=arguments[1]/255,o=arguments[2]/255,s=Math.max(a,c,o),h=s-Math.min(a,c,o),f=function(t){return(s-t)/6/h+.5};return 0==h?u=e=0:(e=h/s,t=f(a),n=f(c),r=f(o),a===s?u=r-n:c===s?u=1/3+t-r:o===s&&(u=2/3+n-t),0>u?u+=1:u>1&&(u-=1)),{h:Math.round(65535*u),s:Math.round(254*e),v:Math.round(254*s)}}var app=angular.module("hackthefuture");app.factory("colour",["$http",function(t){var n={colour:[]};return n.changeColour=function(n,r,u){var e=rgb2hsv(n,r,u),a=e.h,c=e.s,o=e.v;return t.put("http://10.0.1.3/api/13c6eb73373cbacf3052be6b1221247/lights/12/state",{hue:a,sat:c,bri:o}).success(function(t){})},n.turnOff=function(){return t.put("http://10.0.1.3/api/13c6eb73373cbacf3052be6b1221247/lights/12/state",{on:!1}).success(function(){})},n.turnOn=function(){return t.put("http://10.0.1.3/api/13c6eb73373cbacf3052be6b1221247/lights/12/state",{on:!0}).success(function(){console.log("test")})},n}]),app.factory("register",["$http",function(t){var n={};return n.register=function(n,r,u){var e={name:n,members:[{name:r},{name:u}]};return t.put("https://hackthefuture.herokuapp.com/dashboard/team",e).success(function(t){})},n}]),app.factory("qrcode",["$http",function(t){var n={};return n.qrcode=function(){},n}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJyZ2IyaHN2IiwicnIiLCJnZyIsImJiIiwiaCIsInMiLCJyIiwiYXJndW1lbnRzIiwiZyIsImIiLCJ2IiwiTWF0aCIsIm1heCIsImRpZmYiLCJtaW4iLCJkaWZmYyIsImMiLCJyb3VuZCIsImFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJmYWN0b3J5IiwiJGh0dHAiLCJvIiwiY29sb3VyIiwiY2hhbmdlQ29sb3VyIiwicm9vZCIsImdyb2VuIiwiYmxhdXciLCJoc3YiLCJodWUiLCJzYXQiLCJicmkiLCJwdXQiLCJzdWNjZXNzIiwiZGF0YSIsInR1cm5PZmYiLCJvbiIsInR1cm5PbiIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsInRlYW1uYW1lIiwiZmlyc3RUZWFtIiwic2Vjb25kVGVhbSIsIm5hbWUiLCJtZW1iZXJzIiwicXJjb2RlIl0sIm1hcHBpbmdzIjoiQUFFQSxRQUFTQSxXQUNILEdBQUlDLEdBQUlDLEVBQUlDLEVBSVJDLEVBQUdDLEVBSEhDLEVBQUlDLFVBQVUsR0FBSyxJQUNuQkMsRUFBSUQsVUFBVSxHQUFLLElBQ25CRSxFQUFJRixVQUFVLEdBQUssSUFFbkJHLEVBQUlDLEtBQUtDLElBQUlOLEVBQUdFLEVBQUdDLEdBQ25CSSxFQUFPSCxFQUFJQyxLQUFLRyxJQUFJUixFQUFHRSxFQUFHQyxHQUMxQk0sRUFBUSxTQUFTQyxHQUNiLE9BQVFOLEVBQUlNLEdBQUssRUFBSUgsRUFBTyxHQXdCcEMsT0FyQlksSUFBUkEsRUFDQVQsRUFBSUMsRUFBSSxHQUVSQSxFQUFJUSxFQUFPSCxFQUNYVCxFQUFLYyxFQUFNVCxHQUNYSixFQUFLYSxFQUFNUCxHQUNYTCxFQUFLWSxFQUFNTixHQUVQSCxJQUFNSSxFQUNOTixFQUFJRCxFQUFLRCxFQUNITSxJQUFNRSxFQUNaTixFQUFLLEVBQUksRUFBS0gsRUFBS0UsRUFDYk0sSUFBTUMsSUFDWk4sRUFBSyxFQUFJLEVBQUtGLEVBQUtELEdBRWYsRUFBSkcsRUFDQUEsR0FBSyxFQUNDQSxFQUFJLElBQ1ZBLEdBQUssS0FJVEEsRUFBR08sS0FBS00sTUFBVSxNQUFKYixHQUNkQyxFQUFHTSxLQUFLTSxNQUFVLElBQUpaLEdBQ2RLLEVBQUdDLEtBQUtNLE1BQVUsSUFBSlAsSUF0Q3hCLEdBQUlRLEtBQU1DLFFBQVFDLE9BQU8sZ0JBMEN6QkYsS0FBSUcsUUFBUSxVQUFXLFFBQVMsU0FBU0MsR0FDdkMsR0FBSUMsSUFDRkMsVUE2QkYsT0ExQkFELEdBQUVFLGFBQWUsU0FBU0MsRUFBTUMsRUFBT0MsR0FDckMsR0FBSUMsR0FBTTdCLFFBQVEwQixFQUFNQyxFQUFPQyxHQUUzQkUsRUFBTUQsRUFBSXpCLEVBQ1YyQixFQUFNRixFQUFJeEIsRUFDVjJCLEVBQU1ILEVBQUluQixDQUVkLE9BQU9ZLEdBQU1XLElBQUksdUVBQ2RILElBQU9BLEVBQUtDLElBQU9BLEVBQUtDLElBQU9BLElBQU1FLFFBQVEsU0FBU0MsT0FLM0RaLEVBQUVhLFFBQVUsV0FDVixNQUFPZCxHQUFNVyxJQUFJLHVFQUF3RUksSUFBTSxJQUFRSCxRQUFRLGVBS2pIWCxFQUFFZSxPQUFTLFdBQ1QsTUFBT2hCLEdBQU1XLElBQUksdUVBQXdFSSxJQUFNLElBQU9ILFFBQVEsV0FDNUdLLFFBQVFDLElBQUksV0FLVGpCLEtBR1RMLElBQUlHLFFBQVEsWUFBYSxRQUFTLFNBQVNDLEdBQ3pDLEdBQUlDLEtBZ0JKLE9BZEFBLEdBQUVrQixTQUFXLFNBQVNDLEVBQVVDLEVBQVdDLEdBQ3pDLEdBQUlULElBQ0ZVLEtBQU1ILEVBQ05JLFVBQ0dELEtBQU1GLElBQ05FLEtBQU1ELElBSVgsT0FBT3RCLEdBQU1XLElBQUkscURBQ2ZFLEdBQU1ELFFBQVEsU0FBU0MsT0FJcEJaLEtBR1RMLElBQUlHLFFBQVEsVUFBVyxRQUFTLFNBQVNDLEdBQ3ZDLEdBQUlDLEtBTUosT0FKQUEsR0FBRXdCLE9BQVMsYUFJSnhCIiwiZmlsZSI6ImZhY3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnaGFja3RoZWZ1dHVyZScpXG5cbmZ1bmN0aW9uIHJnYjJoc3YgKCkge1xuICAgICAgdmFyIHJyLCBnZywgYmIsXG4gICAgICAgICAgciA9IGFyZ3VtZW50c1swXSAvIDI1NSxcbiAgICAgICAgICBnID0gYXJndW1lbnRzWzFdIC8gMjU1LFxuICAgICAgICAgIGIgPSBhcmd1bWVudHNbMl0gLyAyNTUsXG4gICAgICAgICAgaCwgcyxcbiAgICAgICAgICB2ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICAgICAgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKSxcbiAgICAgICAgICBkaWZmYyA9IGZ1bmN0aW9uKGMpe1xuICAgICAgICAgICAgICByZXR1cm4gKHYgLSBjKSAvIDYgLyBkaWZmICsgMSAvIDI7XG4gICAgICAgICAgfTtcblxuICAgICAgaWYgKGRpZmYgPT0gMCkge1xuICAgICAgICAgIGggPSBzID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcyA9IGRpZmYgLyB2O1xuICAgICAgICAgIHJyID0gZGlmZmMocik7XG4gICAgICAgICAgZ2cgPSBkaWZmYyhnKTtcbiAgICAgICAgICBiYiA9IGRpZmZjKGIpO1xuXG4gICAgICAgICAgaWYgKHIgPT09IHYpIHtcbiAgICAgICAgICAgICAgaCA9IGJiIC0gZ2c7XG4gICAgICAgICAgfWVsc2UgaWYgKGcgPT09IHYpIHtcbiAgICAgICAgICAgICAgaCA9ICgxIC8gMykgKyByciAtIGJiO1xuICAgICAgICAgIH1lbHNlIGlmIChiID09PSB2KSB7XG4gICAgICAgICAgICAgIGggPSAoMiAvIDMpICsgZ2cgLSBycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGggPCAwKSB7XG4gICAgICAgICAgICAgIGggKz0gMTtcbiAgICAgICAgICB9ZWxzZSBpZiAoaCA+IDEpIHtcbiAgICAgICAgICAgICAgaCAtPSAxO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgaDogTWF0aC5yb3VuZChoICogNjU1MzUpLFxuICAgICAgICAgIHM6IE1hdGgucm91bmQocyAqIDI1NCksXG4gICAgICAgICAgdjogTWF0aC5yb3VuZCh2ICogMjU0KVxuICAgICAgfTtcbiAgfVxuXG5hcHAuZmFjdG9yeSgnY29sb3VyJywgWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XG4gIHZhciBvID0ge1xuICAgIGNvbG91cjogW11cbiAgfTtcblxuICBvLmNoYW5nZUNvbG91ciA9IGZ1bmN0aW9uKHJvb2QsIGdyb2VuLCBibGF1dyl7XG4gICAgdmFyIGhzdiA9IHJnYjJoc3Yocm9vZCwgZ3JvZW4sIGJsYXV3KTtcblxuICAgIHZhciBodWUgPSBoc3YuaDtcbiAgICB2YXIgc2F0ID0gaHN2LnM7XG4gICAgdmFyIGJyaSA9IGhzdi52O1xuXG4gICAgcmV0dXJuICRodHRwLnB1dChcImh0dHA6Ly8xMC4wLjEuMy9hcGkvMTNjNmViNzMzNzNjYmFjZjMwNTJiZTZiMTIyMTI0Ny9saWdodHMvMTIvc3RhdGVcIixcbiAgICAgIHtcImh1ZVwiOiBodWUsIFwic2F0XCI6IHNhdCwgXCJicmlcIjogYnJpfSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG5cbiAgICB9KTtcbiAgfVxuXG4gIG8udHVybk9mZiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkaHR0cC5wdXQoXCJodHRwOi8vMTAuMC4xLjMvYXBpLzEzYzZlYjczMzczY2JhY2YzMDUyYmU2YjEyMjEyNDcvbGlnaHRzLzEyL3N0YXRlXCIsIHtcIm9uXCI6IGZhbHNlfSkuc3VjY2VzcyhmdW5jdGlvbigpe1xuXG4gICAgfSk7XG4gIH1cblxuICBvLnR1cm5PbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkaHR0cC5wdXQoXCJodHRwOi8vMTAuMC4xLjMvYXBpLzEzYzZlYjczMzczY2JhY2YzMDUyYmU2YjEyMjEyNDcvbGlnaHRzLzEyL3N0YXRlXCIsIHtcIm9uXCI6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uKCl7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbztcbn1dKTtcblxuYXBwLmZhY3RvcnkoJ3JlZ2lzdGVyJywgWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XG4gIHZhciBvID0ge307XG5cbiAgby5yZWdpc3RlciA9IGZ1bmN0aW9uKHRlYW1uYW1lLCBmaXJzdFRlYW0sIHNlY29uZFRlYW0pIHtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIG5hbWU6IHRlYW1uYW1lLFxuICAgICAgbWVtYmVyczogW1xuICAgICAgICB7bmFtZTogZmlyc3RUZWFtfSxcbiAgICAgICAge25hbWU6IHNlY29uZFRlYW19XG4gICAgICBdXG4gICAgfTtcblxuICAgIHJldHVybiAkaHR0cC5wdXQoXCJodHRwczovL2hhY2t0aGVmdXR1cmUuaGVyb2t1YXBwLmNvbS9kYXNoYm9hcmQvdGVhbVwiLFxuICAgICAgZGF0YSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbztcbn1dKTtcblxuYXBwLmZhY3RvcnkoJ3FyY29kZScsIFsnJGh0dHAnLCBmdW5jdGlvbigkaHR0cCkge1xuICB2YXIgbyA9IHt9O1xuXG4gIG8ucXJjb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gIH1cblxuICByZXR1cm4gbztcbn1dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==