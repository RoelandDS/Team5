function rgb2hsv(){var t,n,r,u,e,a=arguments[0]/255,c=arguments[1]/255,s=arguments[2]/255,o=Math.max(a,c,s),h=o-Math.min(a,c,s),i=function(t){return(o-t)/6/h+.5};return 0==h?u=e=0:(e=h/o,t=i(a),n=i(c),r=i(s),a===o?u=r-n:c===o?u=1/3+t-r:s===o&&(u=2/3+n-t),0>u?u+=1:u>1&&(u-=1)),{h:Math.round(65535*u),s:Math.round(254*e),v:Math.round(254*o)}}var app=angular.module("hackthefuture");app.factory("colour",["$http",function(t){var n={colour:[]};return n.changeColour=function(n,r,u){var e=rgb2hsv(n,r,u),a=e.h,c=e.s,s=e.v;return t.put("http://10.0.1.3/api/13c6eb73373cbacf3052be6b1221247/lights/12/state",{hue:a,sat:c,bri:s}).success(function(t){})},n.turnOff=function(){return t.put("http://10.0.1.3/api/13c6eb73373cbacf3052be6b1221247/lights/12/state",{on:!1}).success(function(){})},n.turnOn=function(){return t.put("http://10.0.1.3/api/13c6eb73373cbacf3052be6b1221247/lights/12/state",{on:!0}).success(function(){console.log("test")})},n}]),app.factory("register",["$http",function(t){var n={};return n.register=function(n,r,u){var e={name:n,members:[{name:r},{name:u}]};return t.put("https://hackthefuture.herokuapp.com/dashboard/team",e).success(function(t){})},n}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJyZ2IyaHN2IiwicnIiLCJnZyIsImJiIiwiaCIsInMiLCJyIiwiYXJndW1lbnRzIiwiZyIsImIiLCJ2IiwiTWF0aCIsIm1heCIsImRpZmYiLCJtaW4iLCJkaWZmYyIsImMiLCJyb3VuZCIsImFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJmYWN0b3J5IiwiJGh0dHAiLCJvIiwiY29sb3VyIiwiY2hhbmdlQ29sb3VyIiwicm9vZCIsImdyb2VuIiwiYmxhdXciLCJoc3YiLCJodWUiLCJzYXQiLCJicmkiLCJwdXQiLCJzdWNjZXNzIiwiZGF0YSIsInR1cm5PZmYiLCJvbiIsInR1cm5PbiIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsInRlYW1uYW1lIiwiZmlyc3RUZWFtIiwic2Vjb25kVGVhbSIsIm5hbWUiLCJtZW1iZXJzIl0sIm1hcHBpbmdzIjoiQUFFQSxRQUFTQSxXQUNILEdBQUlDLEdBQUlDLEVBQUlDLEVBSVJDLEVBQUdDLEVBSEhDLEVBQUlDLFVBQVUsR0FBSyxJQUNuQkMsRUFBSUQsVUFBVSxHQUFLLElBQ25CRSxFQUFJRixVQUFVLEdBQUssSUFFbkJHLEVBQUlDLEtBQUtDLElBQUlOLEVBQUdFLEVBQUdDLEdBQ25CSSxFQUFPSCxFQUFJQyxLQUFLRyxJQUFJUixFQUFHRSxFQUFHQyxHQUMxQk0sRUFBUSxTQUFTQyxHQUNiLE9BQVFOLEVBQUlNLEdBQUssRUFBSUgsRUFBTyxHQXdCcEMsT0FyQlksSUFBUkEsRUFDQVQsRUFBSUMsRUFBSSxHQUVSQSxFQUFJUSxFQUFPSCxFQUNYVCxFQUFLYyxFQUFNVCxHQUNYSixFQUFLYSxFQUFNUCxHQUNYTCxFQUFLWSxFQUFNTixHQUVQSCxJQUFNSSxFQUNOTixFQUFJRCxFQUFLRCxFQUNITSxJQUFNRSxFQUNaTixFQUFLLEVBQUksRUFBS0gsRUFBS0UsRUFDYk0sSUFBTUMsSUFDWk4sRUFBSyxFQUFJLEVBQUtGLEVBQUtELEdBRWYsRUFBSkcsRUFDQUEsR0FBSyxFQUNDQSxFQUFJLElBQ1ZBLEdBQUssS0FJVEEsRUFBR08sS0FBS00sTUFBVSxNQUFKYixHQUNkQyxFQUFHTSxLQUFLTSxNQUFVLElBQUpaLEdBQ2RLLEVBQUdDLEtBQUtNLE1BQVUsSUFBSlAsSUF0Q3hCLEdBQUlRLEtBQU1DLFFBQVFDLE9BQU8sZ0JBMEN6QkYsS0FBSUcsUUFBUSxVQUFXLFFBQVMsU0FBU0MsR0FDdkMsR0FBSUMsSUFDRkMsVUE2QkYsT0ExQkFELEdBQUVFLGFBQWUsU0FBU0MsRUFBTUMsRUFBT0MsR0FDckMsR0FBSUMsR0FBTTdCLFFBQVEwQixFQUFNQyxFQUFPQyxHQUUzQkUsRUFBTUQsRUFBSXpCLEVBQ1YyQixFQUFNRixFQUFJeEIsRUFDVjJCLEVBQU1ILEVBQUluQixDQUVkLE9BQU9ZLEdBQU1XLElBQUksdUVBQ2RILElBQU9BLEVBQUtDLElBQU9BLEVBQUtDLElBQU9BLElBQU1FLFFBQVEsU0FBU0MsT0FLM0RaLEVBQUVhLFFBQVUsV0FDVixNQUFPZCxHQUFNVyxJQUFJLHVFQUF3RUksSUFBTSxJQUFRSCxRQUFRLGVBS2pIWCxFQUFFZSxPQUFTLFdBQ1QsTUFBT2hCLEdBQU1XLElBQUksdUVBQXdFSSxJQUFNLElBQU9ILFFBQVEsV0FDNUdLLFFBQVFDLElBQUksV0FLVGpCLEtBR1RMLElBQUlHLFFBQVEsWUFBYSxRQUFTLFNBQVNDLEdBQ3pDLEdBQUlDLEtBZ0JKLE9BZEFBLEdBQUVrQixTQUFXLFNBQVNDLEVBQVVDLEVBQVdDLEdBQ3pDLEdBQUlULElBQ0ZVLEtBQU1ILEVBQ05JLFVBQ0dELEtBQU1GLElBQ05FLEtBQU1ELElBSVgsT0FBT3RCLEdBQU1XLElBQUkscURBQ2ZFLEdBQU1ELFFBQVEsU0FBU0MsT0FJcEJaIiwiZmlsZSI6ImZhY3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnaGFja3RoZWZ1dHVyZScpXG5cbmZ1bmN0aW9uIHJnYjJoc3YgKCkge1xuICAgICAgdmFyIHJyLCBnZywgYmIsXG4gICAgICAgICAgciA9IGFyZ3VtZW50c1swXSAvIDI1NSxcbiAgICAgICAgICBnID0gYXJndW1lbnRzWzFdIC8gMjU1LFxuICAgICAgICAgIGIgPSBhcmd1bWVudHNbMl0gLyAyNTUsXG4gICAgICAgICAgaCwgcyxcbiAgICAgICAgICB2ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICAgICAgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKSxcbiAgICAgICAgICBkaWZmYyA9IGZ1bmN0aW9uKGMpe1xuICAgICAgICAgICAgICByZXR1cm4gKHYgLSBjKSAvIDYgLyBkaWZmICsgMSAvIDI7XG4gICAgICAgICAgfTtcblxuICAgICAgaWYgKGRpZmYgPT0gMCkge1xuICAgICAgICAgIGggPSBzID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcyA9IGRpZmYgLyB2O1xuICAgICAgICAgIHJyID0gZGlmZmMocik7XG4gICAgICAgICAgZ2cgPSBkaWZmYyhnKTtcbiAgICAgICAgICBiYiA9IGRpZmZjKGIpO1xuXG4gICAgICAgICAgaWYgKHIgPT09IHYpIHtcbiAgICAgICAgICAgICAgaCA9IGJiIC0gZ2c7XG4gICAgICAgICAgfWVsc2UgaWYgKGcgPT09IHYpIHtcbiAgICAgICAgICAgICAgaCA9ICgxIC8gMykgKyByciAtIGJiO1xuICAgICAgICAgIH1lbHNlIGlmIChiID09PSB2KSB7XG4gICAgICAgICAgICAgIGggPSAoMiAvIDMpICsgZ2cgLSBycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGggPCAwKSB7XG4gICAgICAgICAgICAgIGggKz0gMTtcbiAgICAgICAgICB9ZWxzZSBpZiAoaCA+IDEpIHtcbiAgICAgICAgICAgICAgaCAtPSAxO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgaDogTWF0aC5yb3VuZChoICogNjU1MzUpLFxuICAgICAgICAgIHM6IE1hdGgucm91bmQocyAqIDI1NCksXG4gICAgICAgICAgdjogTWF0aC5yb3VuZCh2ICogMjU0KVxuICAgICAgfTtcbiAgfVxuXG5hcHAuZmFjdG9yeSgnY29sb3VyJywgWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XG4gIHZhciBvID0ge1xuICAgIGNvbG91cjogW11cbiAgfTtcblxuICBvLmNoYW5nZUNvbG91ciA9IGZ1bmN0aW9uKHJvb2QsIGdyb2VuLCBibGF1dyl7XG4gICAgdmFyIGhzdiA9IHJnYjJoc3Yocm9vZCwgZ3JvZW4sIGJsYXV3KTtcblxuICAgIHZhciBodWUgPSBoc3YuaDtcbiAgICB2YXIgc2F0ID0gaHN2LnM7XG4gICAgdmFyIGJyaSA9IGhzdi52O1xuXG4gICAgcmV0dXJuICRodHRwLnB1dChcImh0dHA6Ly8xMC4wLjEuMy9hcGkvMTNjNmViNzMzNzNjYmFjZjMwNTJiZTZiMTIyMTI0Ny9saWdodHMvMTIvc3RhdGVcIixcbiAgICAgIHtcImh1ZVwiOiBodWUsIFwic2F0XCI6IHNhdCwgXCJicmlcIjogYnJpfSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG5cbiAgICB9KTtcbiAgfVxuXG4gIG8udHVybk9mZiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkaHR0cC5wdXQoXCJodHRwOi8vMTAuMC4xLjMvYXBpLzEzYzZlYjczMzczY2JhY2YzMDUyYmU2YjEyMjEyNDcvbGlnaHRzLzEyL3N0YXRlXCIsIHtcIm9uXCI6IGZhbHNlfSkuc3VjY2VzcyhmdW5jdGlvbigpe1xuXG4gICAgfSk7XG4gIH1cblxuICBvLnR1cm5PbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkaHR0cC5wdXQoXCJodHRwOi8vMTAuMC4xLjMvYXBpLzEzYzZlYjczMzczY2JhY2YzMDUyYmU2YjEyMjEyNDcvbGlnaHRzLzEyL3N0YXRlXCIsIHtcIm9uXCI6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uKCl7XG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbztcbn1dKTtcblxuYXBwLmZhY3RvcnkoJ3JlZ2lzdGVyJywgWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XG4gIHZhciBvID0ge31cblxuICBvLnJlZ2lzdGVyID0gZnVuY3Rpb24odGVhbW5hbWUsIGZpcnN0VGVhbSwgc2Vjb25kVGVhbSkge1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgbmFtZTogdGVhbW5hbWUsXG4gICAgICBtZW1iZXJzOiBbXG4gICAgICAgIHtuYW1lOiBmaXJzdFRlYW19LFxuICAgICAgICB7bmFtZTogc2Vjb25kVGVhbX1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgcmV0dXJuICRodHRwLnB1dChcImh0dHBzOi8vaGFja3RoZWZ1dHVyZS5oZXJva3VhcHAuY29tL2Rhc2hib2FyZC90ZWFtXCIsXG4gICAgICBkYXRhKS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvO1xufV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
