from django.core.management.base import BaseCommand
import yaml
import lxml.html
import sqlite3

class Command(BaseCommand):
    help = "My shiny new management command."

    def handle(self, *args, **options):
        domain = 'http://tabiiro.jp/gourmet/'
        obj = yaml.load(file("./nomihodai/conf/scrape_area.yml"))
        for area1, area in obj.items():
            for area2 in area: 
                url = domain + area1 + "/" + area2
                data = self.parse_html(url)
                self.insertDB(data, area1, area2)


    def parse_html(self, url):
        html = lxml.html.parse(url).getroot()
        sp_name = html.xpath('//*[@id="recommend"]/div/div/div[1]/div[2]/div/div/div[1]/div/dl/dd/span/text()')
        sp_sh_desc = html.xpath('//*[@id="recommend"]/div/div/div[1]/div[2]/div/div/div[2]/div[1]/p[1]/text()')
        sp_ln_desc = html.xpath('//*[@id="recommend"]/div/div/div[1]/div[2]/div/div/div[2]/div[1]/p[2]/text()')
        sp_image_src = html.xpath('//*[@id="recommend"]/div/div/div[1]/div[2]/div/div/div[2]/div[2]/img/@src')
        sp_image = 'http://tabiiro.jp' + sp_image_src[0]
        su_name = html.xpath('//*[@id="recommend"]/div/div/div[2]/div[2]/div/div/div[1]/div/dl/dd/span/text()')
        su_sh_desc = html.xpath('//*[@id="recommend"]/div/div/div[2]/div[2]/div/div/div[2]/div[1]/p[1]/text()')
        su_ln_desc = html.xpath('//*[@id="recommend"]/div/div/div[2]/div[2]/div/div/div[2]/div[1]/p[2]/text()')
        su_image_src = html.xpath('//*[@id="recommend"]/div/div/div[2]/div[2]/div/div/div[2]/div[2]/img/@src')
        su_image = 'http://tabiiro.jp' + su_image_src[0]
        au_name = html.xpath('//*[@id="recommend"]/div/div/div[3]/div[2]/div/div/div[1]/div/dl/dd/span/text()')
        au_sh_desc = html.xpath('//*[@id="recommend"]/div/div/div[3]/div[2]/div/div/div[2]/div[1]/p[1]/text()')
        au_ln_desc = html.xpath('//*[@id="recommend"]/div/div/div[3]/div[2]/div/div/div[2]/div[1]/p[2]/text()')
        au_image_src = html.xpath('//*[@id="recommend"]/div/div/div[3]/div[2]/div/div/div[2]/div[2]/img/@src')
        au_image = 'http://tabiiro.jp' + au_image_src[0]
        wi_name = html.xpath('//*[@id="recommend"]/div/div/div[4]/div[2]/div/div/div[1]/div/dl/dd/span/text()')
        wi_sh_desc = html.xpath('//*[@id="recommend"]/div/div/div[4]/div[2]/div/div/div[2]/div[1]/p[1]/text()')
        wi_ln_desc = html.xpath('//*[@id="recommend"]/div/div/div[4]/div[2]/div/div/div[2]/div[1]/p[2]/text()')
        wi_image_src = html.xpath('//*[@id="recommend"]/div/div/div[4]/div[2]/div/div/div[2]/div[2]/img/@src')
        wi_image = 'http://tabiiro.jp' + wi_image_src[0]
        sp_monthes = []
        for i in range(1, 13):
            path = '//*[@id="recommend"]/div/div/div[1]/div[1]/div[2]/div/div[1]/div[1]/div/ul/li[' + str(i) + ']/'
            act = html.xpath(path + '@class')
            if 'actmonth' in act:
                sp_monthes.append(str(i))
        sp_month = ','.join(sp_monthes)
        su_monthes = []
        for i in range(1, 13):
            path = '//*[@id="recommend"]/div/div/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/ul/li[' + str(i) + ']/'
            act = html.xpath(path + '@class')
            if 'actmonth' in act:
                su_monthes.append(str(i))
        su_month = ','.join(su_monthes)
        au_monthes = []
        for i in range(1, 13):
            path = '//*[@id="recommend"]/div/div/div[3]/div[1]/div[2]/div/div[1]/div[1]/div/ul/li[' + str(i) + ']/'
            act = html.xpath(path + '@class')
            if 'actmonth' in act:
                au_monthes.append(str(i))
        au_month = ','.join(au_monthes)
        wi_monthes = []
        for i in range(1, 13):
            path = '//*[@id="recommend"]/div/div/div[4]/div[1]/div[2]/div/div[1]/div[1]/div/ul/li[' + str(i) + ']/'
            act = html.xpath(path + '@class')
            if 'actmonth' in act:
                wi_monthes.append(str(i))
        wi_month = ','.join(wi_monthes)

        parse_data = {
                'sp_name': sp_name[0].encode('utf-8'),
                'sp_sh_desc': sp_sh_desc[0].encode('utf-8'),
                'sp_ln_desc': sp_ln_desc[0].encode('utf-8'),
                'sp_image': sp_image,
                'sp_month': sp_month,
                'su_name': su_name[0].encode('utf-8'),
                'su_sh_desc': su_sh_desc[0].encode('utf-8'),
                'su_ln_desc': su_ln_desc[0].encode('utf-8'),
                'su_image': su_image,
                'su_month': su_month,
                'au_name': au_name[0].encode('utf-8'),
                'au_sh_desc': au_sh_desc[0].encode('utf-8'),
                'au_ln_desc': au_ln_desc[0].encode('utf-8'),
                'au_image': au_image,
                'au_month': au_month,
                'wi_name': wi_name[0].encode('utf-8'),
                'wi_sh_desc': wi_sh_desc[0].encode('utf-8'),
                'wi_ln_desc': wi_ln_desc[0].encode('utf-8'),
                'wi_image': wi_image,
                'wi_month': wi_month,
        }
        return parse_data


    def insertDB(self, data, area1, area2):
        conn = sqlite3.connect('./db.sqlite3')
        c = conn.cursor()
        insertsql = ("insert into nomihodai_food (name, short_desc, long_desc, season, image_src, area1_name, area2_name, recommended_months) values (?,?,?,?,?,?,?,?)")
        updatesql = ("update nomihodai_food set name=?,short_desc=?,long_desc=?,image_src=?,recommended_months=? where area1_name=? and area2_name=? and season=?")
        c.execute("select count(*) from nomihodai_food where area1_name=? and area2_name=? and season=?", (area1, area2, 'SP'))
        num = c.fetchone()
        if num[0] == 0:
            c.execute(insertsql, (data['sp_name'], data['sp_sh_desc'], data['sp_ln_desc'], 'SP', data['sp_image'], area1, area2, data['sp_month']))
        else:
            c.execute(updatesql, (data['sp_name'], data['sp_sh_desc'], data['sp_ln_desc'], data['sp_image'], data['sp_month'], area1, area2, 'SP'))
        c.execute("select count(*) from nomihodai_food where area1_name=? and area2_name=? and season=?", (area1, area2, 'SU'))
        num = c.fetchone()
        if num[0] == 0:
            c.execute(insertsql, (data['su_name'], data['su_sh_desc'], data['su_ln_desc'], 'SU', data['su_image'], area1, area2, data['su_month']))
        else:
            c.execute(updatesql, (data['su_name'], data['su_sh_desc'], data['su_ln_desc'], data['su_image'], data['su_month'], area1, area2, 'SU'))
        c.execute("select count(*) from nomihodai_food where area1_name=? and area2_name=? and season=?", (area1, area2, 'FA'))
        num = c.fetchone()
        if num[0] == 0:
            c.execute(insertsql, (data['au_name'], data['au_sh_desc'], data['au_ln_desc'], 'FA', data['au_image'], area1, area2, data['au_month']))
        else:
            c.execute(updatesql, (data['au_name'], data['au_sh_desc'], data['au_ln_desc'], data['au_image'], data['au_month'], area1, area2, 'FA'))
        c.execute("select count(*) from nomihodai_food where area1_name=? and area2_name=? and season=?", (area1, area2, 'WI'))
        num = c.fetchone()
        if num[0] == 0:
            c.execute(insertsql, (data['wi_name'], data['wi_sh_desc'], data['wi_ln_desc'], 'WI', data['wi_image'], area1, area2, data['wi_month']))
        else:
            c.execute(updatesql, (data['wi_name'], data['wi_sh_desc'], data['wi_ln_desc'], data['wi_image'], data['wi_month'], area1, area2, 'WI'))

        conn.commit()
        conn.close()
