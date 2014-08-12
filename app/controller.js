module.exports = /*@ngInject*/ function($scope) {
  $scope.todos = {
    list: [{
      name: 'foo',
      description: 'Bacon ipsum dolor sit amet capicola andouille rump beef ribs doner beef fatback ball tip filet mignon sausage brisket pancetta pork chop jowl pork loin. Sausage ball tip short ribs flank, frankfurter filet mignon pig chuck ham t-bone boudin shank. Ribeye sausage turkey kevin, brisket swine short ribs sirloin flank t-bone venison leberkas pork belly rump tail. Rump bacon bresaola tenderloin ball tip andouille ham salami doner pork chop. Jowl salami strip steak ribeye ground round.'
    }, {
      name: 'bar',
      description: 'Pork belly shank brisket tail doner ham bresaola pork loin sirloin landjaeger shoulder. Shank bresaola andouille hamburger tongue spare ribs beef landjaeger short ribs tail brisket pork chop jerky. Pork chop tenderloin shankle, t-bone turkey kielbasa frankfurter boudin corned beef capicola. Filet mignon ground round flank beef shank hamburger sirloin. Tongue strip steak beef, pork loin ham frankfurter ham hock swine beef ribs leberkas salami shoulder. Kielbasa tri-tip venison pancetta pork belly landjaeger pig, ball tip filet mignon shank kevin salami sausage. Venison turkey short ribs, flank strip steak biltong corned beef pork rump shank doner meatloaf porchetta.'
    }, {
      name: 'baz',
      description: 'Voluptate ut tempor, nostrud dolor labore kielbasa in aliqua biltong consequat. Qui magna velit, voluptate meatball fugiat hamburger biltong drumstick landjaeger excepteur sirloin minim strip steak. Irure nisi do, in sirloin ribeye short ribs nulla filet mignon pig reprehenderit proident velit. Pancetta bacon capicola occaecat, cillum ball tip sausage prosciutto nulla aute duis brisket pastrami. Swine bresaola turducken pig ut. Consectetur brisket turkey dolore in in. Irure ball tip cupidatat ham hock, et veniam prosciutto sed shankle chuck commodo pariatur hamburger enim.'
    }],
    delete: function(index) {
      this.list.splice(index, 1);
      delete this.active;
    }
  };
};
