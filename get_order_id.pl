#!/usr/bin/perl
use strict;


#############################################
# 
# This perl script sorting geranal table
# 
# usage : perl get_order_id.pl $ARGV[0] $ARGV[1] 
# 
# $ARGV[0] >>> order table
# $ARGV[1] >>> order id
# 
# 

if( !$ARGV[0])
{
	print "Usage error!!\n";
	print "Usage : perl get_order_id.pl \$ARGV[0] \$ARGV[1]\n\n";
	print "\t\$ARGV[0] >> order table (tmp.csv)\n";
    print "\t\$ARGV[1] >> order id\n";
	die "error";
}


my @tmp;
my %data;
my $id;


open(IN,"$ARGV[0]")||die "$!";

while(<IN>)
{
	chomp;
	@tmp=split "\t",$_;
	$id = $tmp[1];

    if ( $id eq "$ARGV[1]")
    {
        $data{$ARGV[1]}=$_;
    }

}

close IN;


open (OUT,">selected_order.csv")||die "$!";

print OUT "$data{$ARGV[1]}";

close OUT;













